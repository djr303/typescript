abstract class Mammal {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public howOld(): void {
    console.log(`${this.age} years`);
  }
}

export default Mammal;
