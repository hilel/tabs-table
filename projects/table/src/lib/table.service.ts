import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { TabComponent } from './components/tab/tab.component';
import { SortBy } from './table-column';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  public activeTab: Subject<TabComponent> = new Subject();

  constructor() { }

  public sortItems(items: any[], sortBy: SortBy): any[] {
    return (items || []).sort((rowOne, rowTwo) => {
      const firstValue = rowOne[sortBy.columnName];
      const secondValue = rowTwo[sortBy.columnName];
      const isDescending = !sortBy.asc;
      // values are equal so return 0 -- don't need to sort
      if (firstValue === secondValue) return 0;
      // toggle between descending and ascending dependent on the currently applied sort direction
      return (firstValue > secondValue) ? (isDescending ? 1 : -1) : (isDescending ? -1 : 1)
    });
  }
}
