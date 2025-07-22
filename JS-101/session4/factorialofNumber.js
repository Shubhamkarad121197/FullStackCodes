// A factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120


// Implement the function findFactorial() that

// Accepts a number argument n

// Returns a number, that is the factorial of the given number n


// Note
// n will be greater than or equal to zero.

// The factorial of zero, denoted as 0! is equal to 1.


function factorialOfNumber(n){
    let fact=1;
    for(let i=1;i<=n;i++){
        fact*=i
    }
    return fact;
}

console.log(factorialOfNumber(5))