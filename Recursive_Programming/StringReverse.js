//  First extract the substring from index 1 & append it with index 0 caharacter

const reverseString = (str: string) =>{
  if(str === ""){
    return "";
  }else{
    return reverseString(str.substring(1)) + str[0]
  }
}
const str: string = "welcome"
const result = reverseString(str)
console.log(result)

//  itr 1 -> elcome + w
//  itr 2 -> lcome + e + w
//  itr 3 -> come + l + e + w
//  itr 4 -> ome + c + l + e + w
//  itr 5 -> me + o + c + l + e + w
//  itr 6 -> e + m + o + c + l + e + w
//  result -> emoclew
