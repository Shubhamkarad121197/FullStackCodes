// You are given a positive integer 'N' and you are required to implement a recursive function that calculates the sum of the first 'N' natural numbers.

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

// Sample Input 2
// 3

// Sample Output 2
// 6

function NaturalSum(N){
    if(N==1){
        return 1;
    }
    return NaturalSum(N-1)+N  
}


console.log(NaturalSum(10));
