//   currying is functional programming technique in which function with multiple arguments is transformed into sequence of functions & every function
//   takes a single argument 

//  It allows partial application of functions, which makes specialised versions of functions by fixing some of its parameters.
//   It is usedful for creating more modular & reusable code

// Non-curried function
function add(x, y, z) {
  return x + y + z;
}

console.log(add(2, 3, 4)); // Output: 9

// Curried version of the same function
function curryAdd(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

// Usage of the curried function
const curriedAdd = curryAdd(2);
const result = curriedAdd(3)(4);

console.log(result); // Output: 9
