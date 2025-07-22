// Problem Description
// Implement the function findSumOfFirstN() that
// Accepts a number argument n
// Returns a number, which is the sum of all the numbers from 1 to n

// Note
// The number n will always be greater than zero.

// Hints
// Use for-loop to iterate from 1 to n
// Use a new variable to store and return the sum

function findSumOfFirstN(n){
    let sum=n*(n+1)/2
    return sum;
}

console.log(findSumOfFirstN(10))
console.log(findSumOfFirstN(20))
console.log(findSumOfFirstN(25))