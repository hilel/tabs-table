import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { IProduct } from './i-product.inteface';
import { TableColumn } from 'projects/table/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public products$: Observable<IProduct[]>;
  public tableColumns: TableColumn[];

  constructor(private _api: ApiService) {  }

  ngOnInit(): void {
    this.tableColumns = [
      { name: 'vendor', title: 'Vendor' },
      { name: 'name', title: 'Name' },
      { name: 'price', title: 'Price' }
    ]
    this.products$ = this._api.getProducts();
  }
}
