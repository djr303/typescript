import Mammal from "./abstract-common";

class Person extends Mammal {

  constructor(name: string, age: number) {
    super(name, age);
  }
}

const david = new Person("David", 33);

david.howOld();
