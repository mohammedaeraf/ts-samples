class Employee {
    private id: number;  // Not accessible outside the class
    public name: string;
  
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  
    displayInfo(): void {
      console.log(`Employee ID: ${this.id}, Name: ${this.name}`);
    }

    setId(id: number) {
      this.id = id;
    } 
  }
  
  const emp = new Employee(101, "Bob");
  emp.displayInfo();  // Output: Employee ID: 101, Name: Bob
  // emp.id;  // Error: Property 'id' is private and only accessible within class 'Employee'
  