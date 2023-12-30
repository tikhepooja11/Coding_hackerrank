Recursion Examples

//  Factorial of a number 

const factorial =(n:number) =>{
  if(n === 0 || n === 1){
    return 1 
  }else{
    return  n * factorial(n - 1)
  }
}

const num:number = 5;
const result = factorial(num)
console.log(result)
