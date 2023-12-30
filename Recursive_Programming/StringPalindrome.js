//  The first parameter (1 in this case) is the starting index from which to begin extracting characters.
//  The second parameter (-1 in this case) is the ending index. When the ending index is negative, it counts from the end of the string towards the beginning.
//  So, str.slice(1, -1) extracts a substring starting from the second character (index 1) up to, but not including, the last character of the string

const palindrome = (str:string) =>{
  if(str.length <= 1){
    return true;
  }else{
    if(str[0] === str[str.length - 1]){
      return palindrome(str.slice(1,-1))
    }else{
      return false
    }
  }
}

const str: string = "abba"
const result = palindrome(str)
result === true ? console.log("Palindrome") : console.log("Not Palindrome")
