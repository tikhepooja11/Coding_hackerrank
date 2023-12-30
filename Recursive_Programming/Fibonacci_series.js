//  Fibonacci series

// Generally fibonacci series starts with 0,1 & then adding previous two numbers to get new number in series. & Index starts with 0
//  0,1,1,2,3,5,8,13,21,34,55.... fib(0) = 0 , fib(1) = 1 , fib(2) = 1, fib(3) = 2


const fib = (n : number) =>{
  if(n <= 1){
    return n  
  }else{
    return fib(n-1) + fib(n-2)
  }
}
const num = 2
const result = fib(num)
console.log(result)
