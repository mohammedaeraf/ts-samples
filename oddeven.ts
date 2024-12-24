// Function to check if a number is even

function isEven(num: number): boolean {
  // if (num % 2 === 0) 
  //   return true;
  // else
  //   return false;
  return num % 2 === 0;  // strict comparison (checks both value and data type)
}

// ("1" == 1)  ==> return true
// ("1" === 1)  ==> return false
// (12 === 12) ==> return true

// JS equivalent
function isEvenJs(num){
  return num % 2 == 0;
}

// Test the function
let n: number = 7;
const isNumberEven: boolean = isEven(n);

if (isNumberEven == true) {
  console.log(`${n} is even`); 
}
else {
  console.log(`${n} is odd`); 
}

