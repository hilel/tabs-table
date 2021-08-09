import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table.component';
import { TabComponent } from './components/tab/tab.component';

@NgModule({
  declarations: [
    TableComponent,
    TabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    TabComponent
  ]
})
export class TableModule { }
