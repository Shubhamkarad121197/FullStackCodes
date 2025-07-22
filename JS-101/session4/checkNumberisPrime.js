// Problem Description
// A prime number is a number larger than 1 that is divisible by only two numbers: 1 and the number itself.

// If a number isn't prime, it's called composite. This means it is divisible by more than two different numbers.


// Implement the function checkForPrime() that

// Accepts a number argument n

// Returns a boolean

// true, if the number is prime

// false, if the number is composite (not prime)

function checkForPrime(n){
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false
        }
    }
    return true;
}
console.log(checkForPrime(11))