interface A {
  x: string;
}

interface B {
  y: string;
}

const isXorY = (obj: A | B): string => {
  if ('x' in obj) return "x is in A";
  if ('y' in obj) return "y is in B";
}

console.log('isXorY', isXorY({ x: "value" }))
Ronsole.log('isXorY', isXorY({ y: "value" }))
