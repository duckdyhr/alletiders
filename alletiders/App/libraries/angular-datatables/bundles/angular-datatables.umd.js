(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.angular = global.angular || {}, global.angular.datatables = global.angular.datatables || {}),global.ng.core,global.ng.common));
}(this, (function (exports,_angular_core,_angular_common) { 'use strict';

/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
var DataTableDirective = (function () {
    function DataTableDirective(el) {
        this.el = el;
        /**
         * The DataTable option you pass to configure your table.
         */
        this.dtOptions = {};
    }
    DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dtTrigger) {
            this.dtTrigger.subscribe(function () {
                _this.displayTable();
            });
        }
        else {
            this.displayTable();
        }
    };
    DataTableDirective.prototype.displayTable = function () {
        var _this = this;
        this.dtInstance = new Promise(function (resolve, reject) {
            Promise.resolve(_this.dtOptions).then(function (dtOptions) {
                // Using setTimeout as a "hack" to be "part" of NgZone
                setTimeout(function () {
                    var dt = $(_this.el.nativeElement).DataTable(dtOptions);
                    resolve(dt);
                });
            });
        });
    };
    return DataTableDirective;
}());
DataTableDirective.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: '[datatable]'
            },] },
];
/** @nocollapse */
DataTableDirective.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
]; };
DataTableDirective.propDecorators = {
    'dtOptions': [{ type: _angular_core.Input },],
    'dtTrigger': [{ type: _angular_core.Input },],
};

/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
var DataTablesModule = (function () {
    function DataTablesModule() {
    }
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule
        };
    };
    return DataTablesModule;
}());
DataTablesModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [_angular_common.CommonModule],
                declarations: [DataTableDirective],
                exports: [DataTableDirective]
            },] },
];
/** @nocollapse */
DataTablesModule.ctorParameters = function () { return []; };

/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
/**
 * @module
 * @description
 * Entry point from which you should import all public library APIs.
 */

exports.DataTableDirective = DataTableDirective;
exports.DataTablesModule = DataTablesModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
