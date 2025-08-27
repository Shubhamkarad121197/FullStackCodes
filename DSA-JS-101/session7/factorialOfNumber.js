// Given a number n, you have to calculate the factorial of that number.

// Input format
// First line contains an integer - n

// Output format
// Print the factorial of the given number.

// Sample Input 1
// 3

// Sample Output 1
// 6

// Explanation
// 3! = 3.2.1 = 6

function factorialOfNum(n){
    if(n==1||n==0){
        return 1;
    }

    return n*factorialOfNum(n-1)
}

console.log(factorialOfNum(5))