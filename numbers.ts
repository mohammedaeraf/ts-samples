let numbers:number[] = [1,2,3];

// toString() will make 1 as "1"
let strNos:string[] = numbers.map(n => n.toString());
console.log(strNos);

let str:string = '';
let allNos:string = strNos.reduce((str, n:string) => str + ' - ' + n);
console.log(allNos);