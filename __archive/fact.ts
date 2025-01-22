
// number to which Factorial is to be calculated
const num: number = 5;

let fact: number;
fact = calculateFact(num);
console.log(`Factorial of ${num} is ${fact}`);

function calculateFact(num: number): number {
    let fact: number = 1;
    for (let i = 2; i <= fact; i++) 
        fact = fact * i;
    return fact;
}

