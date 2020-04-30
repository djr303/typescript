interface IIteratorResult<T> {
  done: boolean;
  value: T;
}

interface IIterator<T> {
  next(value?: any): IIteratorResult<T>;
  return?(value?: any): IIteratorResult<T>;
  throw?(e?: any): IIteratorResult<T>;
}

type position = "Top" | "Right" | "Bottom" | "Left";

class Component {
  public position: position;
  constructor(pos: position) {
    this.position = pos;
  }
}

class Frames implements IIterator<Component> {
  private pointer: number = -1;
  private length: number;

  constructor(private components: Component[]) {
    this.length = components.length;
  }

  public next(): IIteratorResult<Component> {
    this.pointer++;
    if (this.pointer < this.length) {
      return {
        done: false,
        value: this.components[this.pointer],
      };

    } else {
      return {
          done: true,
          value: null,
      };
    }
  }

}

const comps = [
  new Component("Top"),
  new Component("Right"),
  new Component("Bottom"),
  new Component("Left"),
];

const f = new Frames(comps);

console.log("frame.next() (0)", f.next());
console.log("frame.next() (1)", f.next());
console.log("frame.next() (2)", f.next());
console.log("frame.next() (3)", f.next());
console.log("frame.next() (4)", f.next());
