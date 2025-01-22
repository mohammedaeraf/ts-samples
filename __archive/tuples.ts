let person: [string, number, boolean]; // key value pair

// ?title=Thinkpad
// application.properties ==> h2.Driver = DriverName

person = ["Alice", 30, true];  // Correct
//person = [30, "Alice"];  // Error: Type 'number' is not assignable to type 'string'

console.log(person);  // Output: ["Alice", 30]
// console.log(person[0]);  // Output: Bob
// console.log(person[1]);  // Output: 25