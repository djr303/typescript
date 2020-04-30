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
var Mammal = /** @class */ (function () {
    function Mammal() {
        this.getName = function (name) {
            return name;
        };
    }
    return Mammal;
}());
var David = /** @class */ (function (_super) {
    __extends(David, _super);
    function David() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    David.prototype.getName = function (name) {
        var david = _super.prototype.getName.call(this, name);
        return "Greeting " + david;
    };
    return David;
}(Mammal));
var david = new David();
console.log("getName() invoked", david.getName('David'));
