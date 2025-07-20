// Task 1: Function Basics
// Write a JavaScript program consisting of a function getSquare that will compute and console log the square based on a number value passed to it. Also, log the messages given below in the same order
// Print the square of 3 using getSquare
// Print "hello"
// Print the square of 2 using getSquare
// Print "Crio"
// Print "Learn by doing"
// Print the square of 24 using getSquare

function getSquare(number){
    return number**2
}

console.log(getSquare(3))
console.log("Hello");
console.log(getSquare(2));
console.log("Crio")
console.log("Learn by Doing");
console.log(getSquare(24))

// Task 2: Function Activity with Parameters
// Define a function named getSum that takes in 2 numbers as parameters num1 and num2, and log their sum. Also, log the messages given below in the same order
// Print the sum of 2 and 3 using getSum
// Print your name
// Print the sum of 100 and 250 using getSum

function getSum(num1,num2){
    return num1+num2;
}
console.log(getSum(2,3))
console.log("Shubham");
console.log(getSum(100,250))

// Task 3: Function with Return Values
// Define a function named getSquare that takes in a number as a parameter and returns the square of that number.
// Get the square of 2 store it in mySqr1 using getSquare
// Get the square of 5 store it in mySqr2 using getSquare
// Print their sum: console.log(mySqr1 + mySqr2);

let mySqr1=getSquare(2);
let mySqr2=getSquare(5);

let sum=mySqr1+mySqr2;
console.log(sum)


//Get Doubled

let num=10;
function getDoubled(num){
    return num*2;
}
console.log(getDoubled(num))


//Greet Function 
function greet(){
    console.log("Hello!");
}

greet();