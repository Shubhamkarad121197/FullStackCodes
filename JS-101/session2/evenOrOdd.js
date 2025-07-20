// Problem Description
// Even numbers are numbers that are exactly divisible by 2, whereas an odd number cannot be exactly divided by 2.
// Create a function evenOrOdd() that
// Accepts a number argument num
// Returns a string
// "Even", if the input number num is even
// "Odd", if the input number num is odd

function evenOrOdd(num){
    if(num%2==0){
        return "Even";
    }
    else{
        return "Odd"
    }

}

if (evenOrOdd(2) !== "Even")

    console.log("Test fails: Expected Even for input num = 2");

else

    console.log("Sample test case for input num = 2 passed!");
