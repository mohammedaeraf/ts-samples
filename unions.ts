
function printStatusCode(code: string | number) {

  // template strings or template literals
  console.log(`My status code is ${code}.`); // ${}
  // console.log('My status code is ' + code + '.');
}

printStatusCode(404);
printStatusCode("404");
