class Arrows {

  public property: string = "my-value";

  public function01 = function() {
    return this.property;
  };

  public function02() {
    return this.property;
  }

  public function03 = () => {
    return this.property;
  }

}

const arrows = new Arrows();

console.log("function01 invoked", arrows.function01());
console.log("============");
console.log();
console.log("function02 invoked", arrows.function02());
console.log("============");
console.log();
console.log("function03 invoked", arrows.function03());
console.log("============");
console.log();
