//  Higher-order functions are functions that take other functions as arguments or return functions as results.

// 1. map() function: The map function applies a given function to all elements of an array and returns a new array with the results.
    const numbers = [1, 2, 3, 4, 5];
    const doubledNumbers = numbers.map(function (num) {
      return num * 2;
    });
    
    console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Example 2: Using arrow function 
const squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


// Example: Filtering even numbers from an array------------------------------------------------------------------------------------------
const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]


// Example: Summing up all elements in an array using reduce------------------------------------------------------------------------------------------
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15


// Example: Logging each element in an array using forEach ------------------------------------------------------------------------------------
numbers.forEach(function (num) {
  console.log(num);
});
// Output:
// 1
// 2
// 3
// 4
// 5
