// Hoisting - concept in a JS through which variables & function declarations are moved to the top ( of the scope in which they are defined) during compilation phase. 
//            This allows variables & functions to use before their declaration.

// Note - Only variables & function declartions are hoisted not initialization.

// example -> Variable Hoisting

  console.log(a)  //  undefined
  var a = 2
  console.log(a)  //  2
// ----------------------------------------------------------------------------------------------------------

// example -> Function Hoisting

  myFunction()          // works without any error returns output as hello
  function myFunction(){
    console.log("hello")
  }
// ----------------------------------------------------------------------------------------------------------
// example -> Function Expression Hoisting => not allowed

  myFunction()          // throws an error because foo is not yet assigned a function value.
  var myFunction =  function(){
    console.log("hello")
  }
// In this case, only the variable declaration var foo is hoisted, not the function expression function() {...}.
// So, when we try to call foo before the assignment, it throws an error because foo is not yet assigned a function value.


//----------------------------------------------------------------------------------------------------------

// In JavaScript, just like with function declarations, class declarations are also hoisted. 
// This means that you can use a class before it is declared in the code. 
// However, similar to function declarations, the initialization (class definition) is not hoisted.

// Example 1: Class declaration hoisting
let car1 = new Car(); // Works fine

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

console.log(car1); // Outputs: Car { make: undefined, model: undefined }


// Example 2: Class expression hoisting
let car2 = new Car(); // Throws ReferenceError

let Car = class {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
};


