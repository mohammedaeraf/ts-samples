interface Person {
    name: string;
  }
  
  interface Employee {
    employeeId: number;
  }
  
  type Staff = Person & Employee;
  
  const staffMember: Staff = { name: "Alice", employeeId: 1234 };
  
  console.log(staffMember);  // Output: { name: 'Alice', employeeId: 1234 }
  