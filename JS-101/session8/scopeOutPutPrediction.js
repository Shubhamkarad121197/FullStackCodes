// Task 1: Global Scope

// In this task, you will demonstrate how a global variable can be accessed both inside and outside a function.

// Test:

// What will be the output of the func() function?

// What will be the output of the log statement outside the function?


var a = 10; // variable 'a' global scope


function func() {

    console.log("a is accessible within the function:", a);

}


func();  // **What will be the output?** //a is accessible within the function:10


 console.log("a is accessible outside the function:", a); // **What will be the output?** //10
// Task 2: Function Scope

// In this task, you will demonstrate how function scope works.

// Test:

// What will be the output of todoItem?

// What will be the output of todoList?


let todoList = [];


function addTodo(item){

 	let todoItem = item;

	todoList.push(todoItem);

}

 console.log(todoItem);  // **What will be the output?** //undefinde

 addTodo("Learn JavaScript");

 console.log(todoList);  // **What will be the output?** //"learn JavaScript"

// Task 3: Guess the output

// What is the output of the display() function?

// What will happen when trying to access lastName outside of the display() function?


var firstName = "Kevin";


function display() {

    var lastName = "Obrain";

    console.log("FullName: " + firstName + " " + lastName);

}

 
display(); // **What will be the output?** Kevin Obrain


console.log("FullName: " + firstName + " " + lastName); // **What will be the output?**  Kevin undefined
