//  Basically n % 10 used to remove last digit of number, while Math.floor(n / 10) used to return remaining number after removing last digit.
//  So, again apply recursion call on remaining number.

const sumOfDigits = (n : number) =>{
  if(n === 0){
    return 0 
  }else{
    return (n % 10) + sumOfDigits(Math.floor(n/10)) 
  }
}
const num = 234
const result = sumOfDigits(num)
console.log(result)
