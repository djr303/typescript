"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var abstract_common_1 = require("./abstract-common");
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(name, age) {
        return _super.call(this, name, age) || this;
    }
    return Person;
}(abstract_common_1["default"]));
var david = new Person("David", 33);
david.howOld();
