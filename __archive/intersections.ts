interface A {
  a: string;
}

interface B {
  b: number;
}

let obj: A & B = { a: "Hello", b: 123 };
