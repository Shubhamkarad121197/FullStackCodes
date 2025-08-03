// Problem Description
// Task 1: Understanding variable scope
// In this task, you will demonstrate how the let (or const or var) keyword variable declarations work.
// Test:
// What will be the output of the checkAccess('admin') call?
// What will be the output of the checkAccess('user') call?


function checkAccess(userRole) {
    if (userRole === 'admin') {
        let message = 'Access granted: Full control';
        console.log(message);  // ✅ Output: Access granted: Full control
    } else {
        let message = 'Access limited';
        console.log(message);  // ✅ Output: Access limited
    }

    console.log(message); // ❌ This will throw a ReferenceError
}

checkAccess('admin');
checkAccess('user');



// Task 2: Scope of var

// In this activity, you will explore how var behaves in different scopes, especially regarding functions and blocks.

// Test:

// What will be the output of console.log(x) inside the function after it has been declared?

// What will be the output of console.log(x) outside the function?


var a = 10;

func();

function func() {
    if (a == 10) {
        var x = 10;
        console.log(x);  // ✅ Output: 10
    }

    console.log(x);  // ✅ Output: 10
}

console.log(x);  // ❌ ReferenceError: x is not defined
