//  Array methods ->

//  slice - use to create new array without modifying original one (taking cake slice without modifing cake)
const arr: number[] = [1, 2, 3, 4, 5];
const newArr: number[] = arr.slice(1,4)     //  upto specified index - 1 i.e non-inclusive
console.log(newArr) // [2,3,4]

//  splice - use to modify the existing array my removing some elements also by replacing by others
const removed: number [] = arr.splice(1, 4, 6, 7) //    Right side ending inclusive ie. upti specified index
console.log(removed)
console.log(arr)    //  [1, 6, 7]

// find() is used to search for an element in an array based on a condition and returns the first matching element, 
// e.g 1
const arr1: number[] = [1, 2, 3, 4, 5]
const firstEvenNumber  = arr1.find((item) => item % 2 === 0)
console.log(firstEvenNumber)    //  2

// while includes() is used to check whether a specific element is present in the array and returns a boolean value.
// e.g 2
const presentOrAbsent = arr1.includes(2) 
console.log(presentOrAbsent) // true

// e.g 3
const fruits = ['apple', 'banana', 'cherry', 'date'];
const hasBanana = fruits.includes('banana');

console.log(hasBanana); // true


// findIndex - returns index of first element satisfies the condition
const arr1: number[] = [1, 2, 3, 4, 5]
const result = arr1.findIndex((item) => item > 2)
console.log(result) //  index = 2, element = 3

//  from() - returns array from an object passed
const myResult = Array.from("Pooja")
console.log(myResult)


//  map - If has single line only no need to write return keyword
const multipleOfTwoArray  = arr1.map((item) =>  item * 2)
console.log(multipleOfTwoArray)     //  [2, 4, 6, 8, 10] 

const multipleOfTwoArray1  = arr1.map((item) => { 
    console.log('multiple lines inside');
    return item * 2
})  // if has multiple lines inside callback fun then return it manually by return keyword 

console.log(multipleOfTwoArray1)    //  [2, 4, 6, 8, 10] 

//  filter
const oddNumbersArray  = arr1.filter((item) => item % 2 !== 0)
console.log(oddNumbersArray)    //  [1, 3, 5] 

//  reduce
const sumOfArrayNumbers = arr1.reduce((accumulator, current) => {
    accumulator = accumulator + current;
    return accumulator
}, 0)

console.log(sumOfArrayNumbers)  //  15



//  every() & some() returns boolean value
const arr2: number[] = [1, 2, 3, 4, 5]
const checkAllEven = arr2.every((item) => item % 2 === 0)
console.log(checkAllEven)   //  false

const checkSomeAreEven = arr2.some((item) => item % 2 === 0)
console.log(checkSomeAreEven)   //  true


//  fill - used to fill an array b some static value upto specified index - 1 i.e non-inclusive
const filledArray = arr2.fill(0, 1, 4)  
console.log(filledArray)    //  [1, 0, 0, 0, 5] 

//  entries() - used to convert array into map of [key value] pairs
const flowers = ['rose', 'sunflower', 'jasmine'];
const fruiteIterator = flowers.entries()
for(let entry of fruiteIterator){
    console.log(entry)
}




// toString
const arr1: number[] = [1, 2, 3, 4, 5]
const myStr = arr1.toString()
console.log(myStr)  //  "1,2,3,4,5" 

//  join()
const joinedArray = arr1.join("-")
console.log(joinedArray) // "1-2-3-4-5" 

//  delete()
delete arr1[0]
console.log(arr1)   //   [, 2, 3, 4, 5] 

//  concat
const arr3: number[] = [1, 2, 3, 4, 5]
const arr2: number[] = [6,7,8]
const concatedArray = arr2.concat(arr3)
console.log(concatedArray)

//  sort
console.log(concatedArray.sort())

//  sort in reverse order
const arr = [5, 2, 9, 1, 5, 6];
arr.sort((a, b) => b - a);
console.log(arr); // 9,6,5,5,2,1

//  reverse
console.log(concatedArray.reverse())

//  isArray - returns true if object is an array else false
const sampleStr = "Pooja";
const isArray1 = Array.isArray(arr2)
const isArray2 = Array.isArray(sampleStr)

console.log(isArray1)
console.log(isArray2)
