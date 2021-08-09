# TabsTable
## Simplbe Angular table with data categories tabs and sorting functionality

## Usage api 

In .html template:

  <tabs-table [columns]="tableColumns">

    <ng-container *ngFor="let product of products$ | async">

      <tabs-table-tab [dataItems]="product.items">
        {{ product.title }}
      </tabs-table-tab>

    </ng-container>

  </tabs-table>

In .ts:

  import { TableColumn } from 'projects/table/src/public-api';

  tableColumns: TableColumn[] = [
    { name: 'vendor', title: 'Vendor' },
    { name: 'name', title: 'Name' },
    { name: 'price', title: 'Price' }
  ]

  dataItems = [
    {
      "title": "Phones",
      "items": [{
        "vendor": "Samsung",
        "name": "S20",
        "price": 3100
        }, {
          "vendor": "Apple",
          "name": "iPhone",
          "price": 25000
        }
      ]
    }, {
      "title": "Cars",
      "items": [
        {
          "vendor": "BMW",
          "name": "X5",
          "price": 195000,
          "is_hybrid": true
        }, {
          "vendor": "Toyota",
          "name": "Rav4",
          "price": 60000,
          "is_hybrid": true
        }
      ]
    }, {
      "title": "Laptops",
      "items": [
        {
          "vendor": "Lenovo",
          "name": "ThinkPad",
          "price": 4000,
          "system": "Linux"
        }, {
            "vendor": "Acer",
            "name": "Aspire",
            "price": 2400,
            "system": "ChromeOS"
        }
      ]
    ]





This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
