interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}

let emp: Employee = {
  name: "Alice",
  employeeId: 1234,
};

console.log(emp); // Output: { name: 'Alice', employeeId: 1234 }
