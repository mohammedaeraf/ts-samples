// Initialize an empty array to store sales amounts
let sales: number[] = [];

// Add sales amounts to the array using push and unshift
sales.push(1000, 2000, 3000); // adds 1000, 2000, 3000 to the end of the array
sales.unshift(500); // adds 500 to the beginning of the array

// Remove the last element from the array and store it in lastSales
let lastSales: number | undefined = sales.pop(); // removes 3000 from the end of the array
console.log(`Last element =>` + lastSales); // outputs 'Last element =>3000'

// Initialize a variable to accumulate the total sales
let totalSales: number = 0;

// Loop through the sales array to calculate the total sales
for (let i: number = 0; i < sales.length; i++) {
    totalSales = totalSales + sales[i]; // accumulate the total sales
}