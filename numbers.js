var numbers = [1, 2, 3];
// toString() will make 1 as "1"
var stringNumbers = numbers.map(function (n) { return n.toString(); });
console.log(stringNumbers);
var str = '';
var allNos = stringNumbers.reduce(function (str, n) { return str + ' - ' + n; });
console.log(allNos);
