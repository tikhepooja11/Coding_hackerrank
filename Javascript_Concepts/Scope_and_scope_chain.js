scope => It defines context in which variables are declared & accessibility of those variables.
Two types -
    1. Global scope -> The varibles declared outside of any function / block have global scope
    2. Local scope -> The variables declared inside of any function / block have local scope

Global scope example 

const name = "pooja"
function myFunction(){
  console.log(name)    // accessible -> pooja
}
  console.log(name)    // accessible -> pooja
// Global scope variables are accessible throughout the entire program

// ---------------------------------------------------------------------------------------------------------------
Local scope example 

function myFunction(){
  const name = "pooja"
  console.log(name)    // accessible -> pooja
}
  console.log(name)    // Not accessible ->  Error! localVar is not defined outside the function
// ---------------------------------------------------------------------------------------------------------------



Scope Chain -> Hierarchical structure of nested functions & their scopes
When variable is accessed, JS looks for the variable in current scope, & if not found it looks for the same in outer (enclosing) scope, &
  it continues till the global scope is reached

var globalVar = "I am global";
function outerFunction(){
  var outerVar = "I am outerVar";
    function innerFunction(){
      var innerVar = "I am innerVar";
      console.log(innerVar)  //  accessible
      console.log(outerVar)  //  accessible
      console.log(globalVar)  //  accessible
    }
  innerFunction()
  console.log(innerVar) //  Not accessible
}
outerFunction()
  console.log(innerVar) //  Not accessible
  console.log(outerVar) //  Not accessible
