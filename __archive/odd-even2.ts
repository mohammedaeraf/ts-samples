const num: number = 4;
const oddEvenStr: string = GetOddOrEven(num);
console.log(oddEvenStr);

function GetOddOrEven(num: number): string {
  let oddOrEven: string;
  oddOrEven = num % 2 === 0 ? "Number is Even" : "Number is Odd";
  return oddOrEven;
}
