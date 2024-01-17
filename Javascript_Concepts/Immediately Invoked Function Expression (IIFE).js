//  Immediately Invoked Function Expression (IIFE) 
// A javascript design pattern which involves function declaration & execution immediately after its creation
// Advantages -> 
//   1. Encapsulation => Use to create a private variables inside the scope which ultimately avoids naming conflicts & pollution of global scope
//   2. Private variables cannot be accessed outside a IIFE  hence throws an error
//   3. Immediate execution => It does not leaves function & variables lingering in the global scope. immediately executes the function once created.


// example
(function(x, y) {
  console.log(x + y);
})(5, 10);  // Outputs: 15


(function() {
  var localVar = "I am private";
  console.log(localVar);
})();

console.log(localVar); // The following would throw an error because localVar is not defined in this scope
