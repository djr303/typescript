"use strict";
exports.__esModule = true;
var Mammal = /** @class */ (function () {
    function Mammal(name, age) {
        this.name = name;
        this.age = age;
    }
    Mammal.prototype.howOld = function () {
        console.log(this.age + " years");
    };
    return Mammal;
}());
exports["default"] = Mammal;
