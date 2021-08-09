import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { TabComponent } from './components/tab/tab.component';
import { SortBy, TableColumn } from './table-column';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  public activeTab: Subject<TabComponent> = new Subject();

  constructor() { }

  public searchItems(searchTerm: string, items: any[], columns: TableColumn[]): any[] {
    if(!searchTerm) return items;
    const filtered = (items || []).filter(_item => {
      return !!(columns || []).find(_c => {debugger;
        return ((_item[_c.name] || '') + '')// ensure to turn it to string
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      })
    });
    console.log(filtered);
    return filtered;
  }

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
