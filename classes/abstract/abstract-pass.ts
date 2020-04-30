import Mammal from "./abstract-common";

class Person extends Mammal {

  constructor(name: string, age: number) {
    super(name, age);
  }

  public greeting(): string {
    return `Hello I'm a person, my name is ${this.name}`;
  }
}

const david = new Person("David", 33);

console.log("howOld()");
david.howOld();
console.log("==============");

console.log("greeting()");
console.log(david.greeting());
