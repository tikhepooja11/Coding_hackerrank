==  - loose equality -> Performs type coercion if operands are of different types i.e it converts the operands of same type before comparison
example - 
5 == "5";  // true, because '5' is coerced to a number before comparison
1 == true; // true, because true is coerced to 1 before comparison


=== - strict equality -> Does not performs type coercion. It directly compares operands by their value along with their type as well

example -
5 === "5";  // false, because the types are different (number vs. string)
1 === true; // false, because the types are different (number vs. boolean)

In general, it's a good practice to use === for equality checks in JavaScript to avoid unintended type coercion and make your code more predictable.
-----------------------------------------------------------------------------------------------------
String coercion - when string + number/boolean/array/object => Others are converted to string 

Number coercion - When maths operators (- or * or / or % ) then always to numbers 
    2. True + 1 = 2

Boolean Coercion - 
    When boolean + number = always number 
        1. True + 3 = 4 and True - 1 = 0 
    
    When boolean + string = always string 
        1. True + '1' = true1 
        2. True - '1' = 0 (true = 1 and false = 0) 
    
    Boolean + boolean always number 
        1. TRUE + TRUE = 2 
