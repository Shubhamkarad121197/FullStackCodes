// Problem Description
// You are given a positive integer 'N'. You have to find the sum of the first 'N' natural numbers.

// Input format
// First line contains an integer - N.

// Output format
// Print the sum of first N natural numbers.

// Sample Input 1
// 10

// Sample Output 1
// 55

// Explanation
// 1+2+3+4+5+6+7+8+9+10 = 55

function naturalSum(n){
    let sum=n*(n+1)/2;
    return sum;
}

console.log(naturalSum(10))