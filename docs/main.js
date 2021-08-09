(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\work\vdoo\git\tabs-table\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "G43p":
/*!************************************************!*\
  !*** ./projects/table/src/lib/table.module.ts ***!
  \************************************************/
/*! exports provided: TableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return TableModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.component */ "UNGu");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tab/tab.component */ "OHB9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class TableModule {
}
TableModule.ɵfac = function TableModule_Factory(t) { return new (t || TableModule)(); };
TableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TableModule });
TableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TableModule, { declarations: [_table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"],
        _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_2__["TabComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"],
        _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_2__["TabComponent"]] }); })();


/***/ }),

/***/ "KloE":
/*!******************************************!*\
  !*** ./projects/table/src/public-api.ts ***!
  \******************************************/
/*! exports provided: TableService, TableComponent, TableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_table_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/table.service */ "PFKW");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return _lib_table_service__WEBPACK_IMPORTED_MODULE_0__["TableService"]; });

/* harmony import */ var _lib_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/table.component */ "UNGu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return _lib_table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"]; });

/* harmony import */ var _lib_table_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/table.module */ "G43p");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return _lib_table_module__WEBPACK_IMPORTED_MODULE_2__["TableModule"]; });

/* harmony import */ var _lib_table_column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/table-column */ "lHPJ");
/* empty/unused harmony star reexport *//*
 * Public API Surface of table
 */






/***/ }),

/***/ "OHB9":
/*!****************************************************************!*\
  !*** ./projects/table/src/lib/components/tab/tab.component.ts ***!
  \****************************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../table.service */ "PFKW");


const _c0 = ["*"];
class TabComponent {
    constructor(_tableService, _cd) {
        this._tableService = _tableService;
        this._cd = _cd;
        this.active = false;
    }
    ngOnInit() {
        this._tableService.activeTab.subscribe(_t => {
            this.active = this === _t;
            this._cd.markForCheck();
        });
    }
    setActive() {
        if (!this.active) {
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
TabComponent.ɵfac = function TabComponent_Factory(t) { return new (t || TabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_table_service__WEBPACK_IMPORTED_MODULE_1__["TableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
TabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabComponent, selectors: [["tabs-table-tab"]], inputs: { dataItems: "dataItems" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "tabs-table-tab", 3, "click"]], template: function TabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabComponent_Template_div_click_0_listener() { return ctx.setActive(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.active);
    } }, styles: [".tabs-table-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 30px;\n  padding: 0 22px;\n  margin-right: 3px;\n  border-radius: 4px 4px 0 0;\n  background-color: #dae3f3;\n  color: #77797d;\n  cursor: pointer;\n}\n.tabs-table-tab.active[_ngcontent-%COMP%] {\n  background-color: #4472c4;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDRjtBQUNFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoidGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYnMtdGFibGUtdGFiIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHBhZGRpbmc6IDAgMjJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlM2YzO1xyXG4gIGNvbG9yOiAjNzc3OTdkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgJi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJjNDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLy8gJjpsYXN0LW9mLXR5cGUge1xyXG4gIC8vICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIC8vIH1cclxufVxyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "PFKW":
/*!*************************************************!*\
  !*** ./projects/table/src/lib/table.service.ts ***!
  \*************************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TableService {
    constructor() {
        this.activeTab = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    sortItems(items, sortBy) {
        return (items || []).sort((rowOne, rowTwo) => {
            const firstValue = rowOne[sortBy.columnName];
            const secondValue = rowTwo[sortBy.columnName];
            const isDescending = !sortBy.asc;
            // values are equal so return 0 -- don't need to sort
            if (firstValue === secondValue)
                return 0;
            // toggle between descending and ascending dependent on the currently applied sort direction
            return (firstValue > secondValue) ? (isDescending ? 1 : -1) : (isDescending ? -1 : 1);
        });
    }
}
TableService.ɵfac = function TableService_Factory(t) { return new (t || TableService)(); };
TableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TableService, factory: TableService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "yTNM");
/* harmony import */ var _projects_table_src_lib_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projects/table/src/lib/table.component */ "UNGu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _projects_table_src_lib_components_tab_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projects/table/src/lib/components/tab/tab.component */ "OHB9");





function AppComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tabs-table-tab", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataItems", product_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1.title, " ");
} }
class AppComponent {
    constructor(_api) {
        this._api = _api;
    }
    ngOnInit() {
        this.tableColumns = [
            { name: 'vendor', title: 'Vendor' },
            { name: 'name', title: 'Name' },
            { name: 'price', title: 'Price' }
        ];
        this.products$ = this._api.getProducts();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 4, consts: [[1, "container"], ["tabFilterBy", "title", 3, "columns"], [4, "ngFor", "ngForOf"], [3, "dataItems"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tabs-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.tableColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.products$));
    } }, directives: [_projects_table_src_lib_table_component__WEBPACK_IMPORTED_MODULE_2__["TableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _projects_table_src_lib_components_tab_tab_component__WEBPACK_IMPORTED_MODULE_4__["TabComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDNyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "UNGu":
/*!***************************************************!*\
  !*** ./projects/table/src/lib/table.component.ts ***!
  \***************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tab/tab.component */ "OHB9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table.service */ "PFKW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TableComponent_th_5_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.sortByColumn.asc ? "\u25BE" : "\u25B4", " ");
} }
function TableComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TableComponent_th_5_Template_th_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const column_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.onSort(column_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TableComponent_th_5_i_3_Template, 2, 1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", column_r2.title, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", column_r2.name == (ctx_r0.sortByColumn == null ? null : ctx_r0.sortByColumn.columnName));
} }
function TableComponent_tr_7_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r8 = ctx.$implicit;
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r6[column_r8.name] || "", " ");
} }
function TableComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TableComponent_tr_7_td_1_Template, 2, 1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.columns);
} }
const _c0 = ["*"];
class TableComponent {
    constructor(_cd, _tableService) {
        this._cd = _cd;
        this._tableService = _tableService;
        this._sortByColumn$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._initialized = false;
    }
    ngAfterContentChecked() {
        if (!this._initialized) {
            this._initialize();
        }
        // TODO: listen to tabs changes to respond if added/remove children tabs tabs
        // this.tabs.changes
        //   .pipe().subscribe(
        //     _t => {
        //     }
        //   )
    }
    onSort(column) {
        if (this.sortByColumn && this.sortByColumn.columnName === column.name) {
            this.sortByColumn.asc = !this.sortByColumn.asc;
        }
        else {
            this.sortByColumn = { columnName: column.name, asc: false }; // first time
        }
        this._sortByColumn$.next(this.sortByColumn);
    }
    _initialize() {
        this._initialized = true;
        this._setupDataItemsObservable(); // have to be called first, before subjects emit first value
        setTimeout(() => {
            var _a;
            // need this timeout for combinedLatest operator to start working,
            // it needs both observables to emit value
            this.tabs.first.setActive(); // set first by default;
            if ((_a = this.columns) === null || _a === void 0 ? void 0 : _a.length) {
                this.onSort(this.columns[0]); // sort by first by defualt
            }
        });
    }
    _setupDataItemsObservable() {
        const tabItemsObs = this._tableService.activeTab
            .asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(_t => _t.dataItems));
        this.dataItems$ =
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([
                tabItemsObs,
                this._sortByColumn$
            ])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((_combined) => {
                return this._tableService.sortItems(_combined[0], _combined[1]);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(
            // just to ensure to trigger change detection on next cycle,
            // after mapped items
            () => this._cd.markForCheck()));
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_table_service__WEBPACK_IMPORTED_MODULE_4__["TableService"])); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["tabs-table"]], contentQueries: function TableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_2__["TabComponent"], 0);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tabs = _t);
    } }, inputs: { tabFilterBy: "tabFilterBy", data: "data", columns: "columns" }, ngContentSelectors: _c0, decls: 9, vars: 4, consts: [[1, "tabs-table-tabs"], [1, "tabs-table-table"], [3, "click", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "click"], ["class", "sort-arrow", 4, "ngIf"], [1, "sort-arrow"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, TableComponent_th_5_Template, 4, 2, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, TableComponent_tr_7_Template, 2, 1, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 2, ctx.dataItems$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".tabs-table-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  justify-items: flex-start;\n}\n\n.tabs-table-table[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  margin-top: 2px;\n}\n\n.tabs-table-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #cfd5ea;\n}\n\n.tabs-table-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #e9ebf5;\n}\n\n.tabs-table-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .tabs-table-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #f9f9fc;\n  padding: 8px;\n  text-align: left;\n}\n\n.tabs-table-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .tabs-table-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.tabs-table-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #4472c4;\n  color: #fff;\n}\n\n.tabs-table-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.tabs-table-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   .sort-arrow[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-style: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUNBO0VBQ0UsbURBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQ0k7RUFBbUIseUJBQUE7QUFFdkI7O0FBREk7RUFBVSx5QkFBQTtBQUlkOztBQURFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFBRTtFQUFZLGVBQUE7QUFHZDs7QUFERTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBR047O0FBRk07RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBSVIiLCJmaWxlIjoidGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFicy10YWJsZS10YWJzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktaXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLnRhYnMtdGFibGUtdGFibGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuXHJcbiAgdHIge1xyXG4gICAgJjpudGgtY2hpbGQoZXZlbil7IGJhY2tncm91bmQtY29sb3I6ICNjZmQ1ZWE7IH1cclxuICAgICY6aG92ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllYmY1OyB9XHJcbiAgfVxyXG5cclxuICB0ZCwgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y5ZjlmYztcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICB0Ym9keSwgdGggeyBjdXJzb3I6IHBvaW50ZXI7IH1cclxuXHJcbiAgdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzJjNDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgICYgPiBzcGFuIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAuc29ydC1hcnJvdyB7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var projects_table_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/table/src/public-api */ "KloE");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            projects_table_src_public_api__WEBPACK_IMPORTED_MODULE_1__["TableModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        projects_table_src_public_api__WEBPACK_IMPORTED_MODULE_1__["TableModule"]] }); })();


/***/ }),

/***/ "lHPJ":
/*!************************************************!*\
  !*** ./projects/table/src/lib/table-column.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "yTNM":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ApiService {
    constructor() { }
    getProducts() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(getProductsData());
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
function getProductsData() {
    return [
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
                }, {
                    "vendor": "Xiaomi",
                    "name": "Poco X3",
                    "price": 3500
                }, {
                    "vendor": "Huawei",
                    "name": "iPhone",
                    "price": 4000
                }]
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
                }, {
                    "vendor": "Opel",
                    "name": "Corsa",
                    "price": 34000,
                    "is_hybrid": false
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
                }, {
                    "vendor": "Microsoft",
                    "name": "Surface Pro",
                    "price": 8000,
                    "system": "Windows"
                }, {
                    "vendor": "Lenovo",
                    "name": "IdeaPad",
                    "price": 1000,
                    "system": "Windows"
                }
            ]
        }
    ];
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map