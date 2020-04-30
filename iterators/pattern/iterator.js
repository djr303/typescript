var Component = /** @class */ (function () {
    function Component(pos) {
        this.position = pos;
    }
    return Component;
}());
var Frames = /** @class */ (function () {
    function Frames(components) {
        this.components = components;
        this.pointer = -1;
        this.length = components.length;
    }
    Frames.prototype.next = function () {
        this.pointer++;
        if (this.pointer < this.length) {
            return {
                done: false,
                value: this.components[this.pointer]
            };
        }
        else {
            return {
                done: true,
                value: null
            };
        }
    };
    return Frames;
}());
var comps = [
    new Component("Top"),
    new Component("Right"),
    new Component("Middle"),
    new Component("Bottom"),
    new Component("Left"),
];
var f = new Frames(comps);
console.log("frame.next() (0)", f.next());
console.log("frame.next() (1)", f.next());
console.log("frame.next() (2)", f.next());
console.log("frame.next() (3)", f.next());
console.log("frame.next() (4)", f.next());
