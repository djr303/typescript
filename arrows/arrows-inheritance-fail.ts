class Mammal {
  public getName = (name: string) => {
    return name;
  }
}

class Person extends Mammal {
  public getName(name: string) {
    const person = super.getName(name);
    return `Greeting ${person}`;
  }
}

const david = new Person();

console.log("getName() invoked", david.getName("David"));
