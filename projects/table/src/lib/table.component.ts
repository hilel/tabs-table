import { AfterContentChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';

import { TabComponent } from './components/tab/tab.component';
import { SortBy, TableColumn } from './table-column';
import { TableService } from './table.service';

@Component({
  selector: 'tabs-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements AfterContentChecked {
  @Input() data: any[];
  @Input() columns: TableColumn[];
  @Input() canSearch: boolean;
  @ContentChildren(TabComponent, { descendants: false }) tabs: QueryList<TabComponent>;

  public dataItems$: Observable<any[]>;
  public sortByColumn: SortBy | null | undefined;

  private _sortByColumn$: Subject<SortBy | null> = new Subject();
  // need search$ to be BehaviorSubject - it fires initial value
  // fixes got no items when canSearch - there are other ways to fix it
  private _search$: BehaviorSubject<string> = new BehaviorSubject('');
  private _initialized: boolean = false;

  constructor(
    private _cd: ChangeDetectorRef,
    private _tableService: TableService
  ) { }

  ngAfterContentChecked(): void {

    if(!this._initialized) {
      this._initialize();
    }
    // TODO: listen to tabs changes to respond if added/remove children tabs tabs
    // this.tabs.changes
    //   .pipe().subscribe(
    //     _t => {
    //     }
    //   )
  }

  public onSort(column: TableColumn) {
    if(this.sortByColumn && this.sortByColumn.columnName === column.name) {
      this.sortByColumn.asc = !this.sortByColumn.asc;
    } else {
      this.sortByColumn = { columnName: column.name, asc: false };// first time
    }
    this._sortByColumn$.next(this.sortByColumn);
  }

  private _initialize() {
    this._initialized = true;
    this._setupDataItemsObservable();// have to be called first, before subjects emit first value
    setTimeout(() => {
      // need this timeout for combinedLatest operator to start working,
      // it needs both observables to emit value
      this.tabs.first.setActive();// set first by default;
      if(this.columns?.length) {
        this.onSort(this.columns[0]);// sort by first by defualt
      }
    });
  }

  public onSearch(term: string) {
    this._search$.next(term);
  }

  private _setupDataItemsObservable() {
    // let tabItemsObs: Observable<any[]>
    // if(this.canSearch) {
    //   tabItemsObs = this._getSearchObservable();
    // } else {
    const tabItemsObs = this._tableService.activeTab
      .asObservable().pipe(
        map(_t => _t.dataItems)
      );
    // }

    const combinedObservables: Observable<any[] | SortBy | string>[] = [
      tabItemsObs, this._sortByColumn$
    ];

    if(this.canSearch) {
      combinedObservables.push(this._getSearchObservable());
    }

    this.dataItems$ =
      combineLatest(combinedObservables)
        .pipe(
          map((_combined) => {
            let itemsToSort: any[] = _combined[0] as any[];
            const term = _combined[2] as string;
            if(this.canSearch && term?.length > 1) {
              itemsToSort = this._tableService.searchItems(
                term, itemsToSort, this.columns
              );
            }
            return this._tableService.sortItems(
              itemsToSort,
              _combined[1] as SortBy)
          }),
          tap(
            // just to ensure to trigger change detection on next cycle,
            // after mapped items
            () => this._cd.markForCheck()
          )
        );
  }

  private _getSearchObservable(): Observable<string> {
    return this._search$.pipe(
      debounceTime(500),
      distinctUntilChanged()// ,
      // switchMap(_searchTerm => {
      //   return this._tableService.activeTab.asObservable()
      //     .pipe(
      //       map(_t => {
      //         if(!_searchTerm?.length) {
      //           console.log(_searchTerm);
      //           return _t.dataItems || [];
      //         }
      //         // get only items wich have search term in on of item columns
      //         const filtered = (_t.dataItems || []).filter(_item => {
      //           (this.columns || []).find(_c =>
      //             ((_item[_c.name] || '') + '')
      //               .toLocaleLowerCase()
      //               .includes(_searchTerm.toLocaleLowerCase())
      //           )
      //         });
      //         console.log(filtered);
      //         return filtered;
      //       })
      //     )
      // })
    );
  }

}
