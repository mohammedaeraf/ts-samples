const num: number = 4;
let isEven: boolean;
isEven = isNumberEven(num); 
if (isEven) 
    console.log(`Number is Even`);
else 
    console.log(`Number is False`);


// returns true if number is even else returns false
function isNumberEven(num: number): boolean {
    let isEven: boolean;

    // shorthand operator
    isEven = num % 2 === 0? true : false;

    // Is remainder == 0? If yes, then assign isEven a value 'true';
    // Else assign it a value 'false';

        // strict comparison
    // if (rem === 0) {
    //     isEven = true;
    // }
    // else {
    //     isEven = false;
    // }

    return isEven;
}

