//  BEST EXAMPLE OF closures
function outerFun(){
    const outerVariable = "I am outer fun"
    function innerFun(){
        console.log(outerVariable)  //  can access outerFun scope & variables
    }
    return innerFun
}

const closure = outerFun() // will return whole inner function body
closure() //    calling innerfun which already has access to outerfun variable - outerVariable though outerFun execution has completed


// Importance or when to use closure ->

// closure allows us to create a private data inside outerFunction 
// closure allows the inner function to remember the environment in which it was created. i.e though outer function finsihed its excution, when innerfunction 
// gets called it will rember its parent environment  & thus remembers the value of a, which was created in outerfunction previously.
// So, in this example closure achieve data hiding by allowing innerFunction to access variable a, as the external code doesn't have direct access to the a parameter, 
// and the inner function can use it without exposing it to the outside world.

// example 2

function outerFunction(a: number){
    function innerFunction(b: number){
        return a * b
    }
    return innerFunction
}

var closureOutput = outerFunction(4) // only returns inner function entire body & sets 4 as argument to outerFunction i.e a=4
var result = closureOutput(5) // calls innerFunction with 5 as argument. b=5

console.log(result) // 20
