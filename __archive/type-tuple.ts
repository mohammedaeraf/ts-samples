// Declare a tuple type alias
type Employee = [number, string, boolean];

// Use the tuple type alias multiple times
let emp1: Employee = [101, "John", true];
let emp2: Employee = [109, "Ravi", false];

let x: number = 10;

let employeesArray: Employee[] = [
    emp1,
    emp2
]

console.log(employeesArray);  // Output: ["John", 30, true]
//console.log(emp2);  // Output: ["Ravi", 25, false]
