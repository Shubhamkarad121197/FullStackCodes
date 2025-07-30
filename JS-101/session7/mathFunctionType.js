// ask 1: Function Expression and Declaration

// Understand the difference between function expressions and function declarations
// Define a function using a function declaration and call it
// Define a function using a function expression and call it


// // Function Declaration
function display(){
    console.log("Hello I am Shubham from function Declaration")
}
display();

// Function Expression
var call=function(){
     console.log("Hello I am Shubham,From Function Expression")

}

call()



// Task 2: Arrow Function Syntax

// Use arrow functions to simplify the syntax
// Define an arrow function that logs 'Hello' to the console and call it
// Define an arrow function that takes a parameter and logs it. Call the function with the argument 8

let arrowFunction=()=>"Hello I am Arrow Function";

let myName=(name)=>`Hello I am ${name}`;

console.log(myName("Shubham"))