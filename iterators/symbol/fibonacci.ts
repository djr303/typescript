interface IIteratorResult<T> {
  value: T,
  done: boolean
}

interface IIterator<T> {
  [Symbol.iterator](): {
    next: () => IIteratorResult<T>
  }
}

class Fibonacci implements IIterator<number> {
  constructor(private max: number){}
  
  fibonacci(num: number, memo?: {}){
    const m = memo || {};

    if (m[num]) return m[num];
    if (num <= 1) return 1;

    return m[num] = this.fibonacci(num - 1, m) + this.fibonacci(num - 2, m);
  }
  
  [Symbol.iterator]() {
    const self = this;
    let pointer: number = 0;
    return {
      next(): IIteratorResult<number> {
        if (pointer <= self.max){
          return {
            value: self.fibonacci(pointer++),
            done: false
          }
        } else {
          return {
            value: null,
            done: true
          }
        }
      }
    }
  }
} 

class Frame implements IIterator<number> {

  constructor(private max: number){}

  [Symbol.iterator]() {
    let pointer: number = 0;
    return {
      next(): IIteratorResult<number> {
        if (pointer <= 5){
          return {
            value: pointer++,
            done: false,
          }
        } else {
          return {
            value: null,
            done: true
          }
        }
      }
    }
  }
}

const seq = new Fibonacci(5);

for (let num of seq){
  console.log(num);
}

// const frame = new Frame(5);

/* for (let f of frame){
  console.log(f);
} */

