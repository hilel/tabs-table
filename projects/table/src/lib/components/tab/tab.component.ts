import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TableService } from '../../table.service';

@Component({
  selector: 'tabs-table-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent implements OnInit {
  @Input() dataItems: any[];
  public active: boolean = false;

  constructor(
    private _tableService: TableService,
    private _cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this._tableService.activeTab.subscribe(
      _t => {// to undo previous active tabs
        this.active = this === _t;
        this._cd.markForCheck();
      }
    );
  }

  public setActive() {
    if(!this.active) {
      // setTimeout to fix expression changed after checked - when changing child from parent component
      // runs on next change detection cycle
      setTimeout(() => {
        this.active = true;
        this._tableService.activeTab.next(this);
        this._cd.markForCheck();
      });
    }
  }

}
