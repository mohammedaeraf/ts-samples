type Student = {
    name: string;
    age: number;
    DOB: Date; // Date type for the Date of Birth
};


// Example of a Student object
const student1: Student = {
    name: "Alice",
    age: 20,
    DOB: new Date(2004, 5, 15), // June 15, 2004 (Months are 0-based)
};

// Example function using the Student type
function printStudentDetails(student: Student): void {
    console.log(`Student Details:`);
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`DOB: ${student.DOB.toDateString()}`);
}

printStudentDetails(student1);
