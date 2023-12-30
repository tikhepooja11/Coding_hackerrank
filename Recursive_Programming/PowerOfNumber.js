//  We have to multiply base by base itself until exponent becomes 0, so any number's exponent=0 means 1;

const power = (base : number, exponent : number) =>{
  if(exponent === 0){
    return 1
  }else{
    return base * power(base , exponent - 1)
  }
}
const num = 2, exponent = 3
const result = power(num, exponent)
console.log(result)
