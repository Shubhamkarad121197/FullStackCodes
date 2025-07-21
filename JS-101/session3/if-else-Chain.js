// Problem Description
// Write a program to log the largest of 3 numbers on the console.
// Step 1: Declare 3 variables num1, num2 and num3 and assign number values to them.
// Step 2: Use if-else chain and && operator to determine the largest of 3 numbers.
// =========
// EXAMPLE 1
// =========
// Sample Input
// 1 9 78
// Sample Output
// 78
// =========
// EXAMPLE 2
// =========
// Sample Input
// 12 3 4
// Sample Output
// 12


function largestNumbers(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1
    }
    else if(num2>num1 && num2>num3){

        return num2
    }
    else{
        return num3
    }

}
console.log(largestNumbers(23,45,13))
console.log(largestNumbers(23,5,13))
console.log(largestNumbers(3,5,13))