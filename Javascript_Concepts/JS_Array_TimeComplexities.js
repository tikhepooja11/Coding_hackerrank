push() and pop()

push(): O(1)
pop(): O(1)

let arr = [1, 2, 3];
arr.push(4); // Adds 4 to the end of the array in constant time
arr.pop();   // Removes the last element from the array in constant time

------------------------------

shift() and unshift()

shift(): O(n)
unshift(): O(n)

let arr = [2, 3, 4];
arr.unshift(1); // Adds 1 to the beginning, shifting all elements to the right
arr.shift();    // Removes the first element, shifting all elements to the left

------------------------------
concat()

O(m + n), where m is the length of the first array and n is the length of the second array.
  
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = arr1.concat(arr2); // Concatenates two arrays

------------------------------

slice()

O(k), where k is the length of the extracted subarray.
  
let arr = [1, 2, 3, 4, 5];
let subarray = arr.slice(1, 4); // Extracts elements at indices 1, 2, and 3

------------------------------

  splice()

O(n + m), where n is the length of the array, and m is the number of elements to be added or removed.
  
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 6); // Removes 1 element starting at index 2 and adds 6 at that position
------------------------------

map(), filter(), forEach(), reduce()

O(n), where n is the length of the array.

let arr = [1, 2, 3, 4, 5];

// Example using map()
let mappedArr = arr.map(x => x * 2); // Applies a function to each element

// Example using filter()
let filteredArr = arr.filter(x => x > 2); // Filters elements based on a condition

// Example using forEach()
arr.forEach(x => console.log(x)); // Performs an action on each element

// Example using reduce()
let sum = arr.reduce((acc, val) => acc + val, 0); // Reduces array to a single value (sum)
