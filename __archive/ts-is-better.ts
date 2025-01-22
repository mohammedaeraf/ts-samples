function calculateArea(length: number, width: number): number {
    return length * width;
}

// Valid usage
console.log(calculateArea(5, 10)); // Outputs 50

// Compile-time errors:
console.log(calculateArea(5, "10")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(calculateArea(5)); // Error: Expected 2 arguments, but got 1.
