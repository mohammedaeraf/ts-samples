class Person {
  name: string;

  // Java Syntax
  // Person(String name) {
  //   this.name = name;
  // }

  constructor(name: string) {
    this.name = name;
  }

  // Java ==> void greet();
  // JavaScript ==> greet(); [doesn't clearly indicate what is returned]
  
  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
    // return 100; // will give an error since we've declared it as void
  }

}

let person = new Person("Alice");
person.name = "John";
person.greet(); // Output: Hello, my name is Alice
