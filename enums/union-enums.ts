enum A {
  Key1 = 'Key01',
  Key2 = 'Key02'
}

enum B {
  Key3 = 'Key03',
  Key4 = 'Key04'
}

type U = A | B

const f = (u: U) => u

f(A.Key1)