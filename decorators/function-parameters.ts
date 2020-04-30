const logParam = (target: any, parameterName: string, parameterIndex: number) => {
  console.log('target', target);
  console.log(`logParam. name: ${parameterName} index: ${parameterIndex}`)
}

class Animal {
  /*constructor(@logParam name: string){
  } */

  static getNameS(@logParam name: string){
  }

  /* 
   * getNameIns(@logParam name: string){
  }*/
}


// console.log('Aniaml.getName("David")', Animal.getName('David'))
