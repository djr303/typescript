const myFunction = function(){
  return 1;
}

const yieldTest = function *(){
  console.log('yieldTest()')
  let yieldValue = yield myFunction();
  console.log('yeildValue', yieldValue);
  return yieldValue;
}

let count = 0
const iterator = yieldTest();

iterator.next();
// iterator.next();


