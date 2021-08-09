import { AfterContentChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, scan, switchMap, tap } from 'rxjs/operators';

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
  @Input() tabFilterBy: string;
  @Input() data: any[];
  @Input() columns: TableColumn[];
  @ContentChildren(TabComponent, { descendants: false }) tabs: QueryList<TabComponent>;

  public dataItems$: Observable<any[]>;
  public sortByColumn: SortBy | null | undefined;

  private _sortByColumn$: Subject<SortBy | null> = new Subject();
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

  private _setupDataItemsObservable() {
    const tabItemsObs = this._tableService.activeTab
      .asObservable().pipe(
        map(_t => _t.dataItems)
      );

    this.dataItems$ =
      combineLatest([
        tabItemsObs,
        this._sortByColumn$
      ])
        .pipe(
          map((_combined) => {
            return this._tableService.sortItems(_combined[0], _combined[1]);
          }),
          tap(
            // just to ensure to trigger change detection on next cycle,
            // after mapped items
            () => this._cd.markForCheck()
          )
        );
  }




}
