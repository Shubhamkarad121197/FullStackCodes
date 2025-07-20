// Create a function isEqual() that
// Accepts two number arguments a and b
// Return a boolean
// true, if both the input numbers a and b are equal
// false, otherwise
// Hints
// Use the comparison operator (===).
// Comparison operators return a boolean value. Use a new variable which can be used to store and return the result.
// You can also use "if else" to solve this problem.

function isEqual(a,b){
    if(a===b){
        return true
    }
    return false;
}


if (isEqual(3,3) !== true)

    console.log("Test fails: Expected true for input a = 3 and b = 3");

else

    console.log("Sample test case for input a = 3 and b = 3 passed!");
