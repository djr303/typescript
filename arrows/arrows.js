var Arrows = /** @class */ (function () {
    function Arrows() {
        var _this = this;
        this.property = "my-value";
        this.function01 = function () {
            return this.property;
        };
        this.function03 = function () {
            return _this.property;
        };
    }
    Arrows.prototype.function02 = function () {
        return this.property;
    };
    return Arrows;
}());
var arrows = new Arrows();
console.log("function01 invoked", arrows.function01());
console.log("============");
console.log();
console.log("function02 invoked", arrows.function02());
console.log("============");
console.log();
console.log("function03 invoked", arrows.function03());
console.log("============");
console.log();
