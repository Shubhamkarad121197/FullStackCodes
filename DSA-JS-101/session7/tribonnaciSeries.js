// In Tribonacci sequence, the nth term Tn, is defined as follows:

// T0 = 0,

// T1 = 1,

// T2 = 1,

// and Tn = Tn-1 + Tn-2 + Tn-3 , for n >= 3.

// Overall the sequence looks like this - 0, 1, 1, 2, 4, 7, 13, 24, 44, 81 …

// Given n, return the value of Tn.

// Input format
// A single line containing an Integer, N.

// Output format
// The Nth integer in the tribonacci sequence.

// Constraints
// 0 <= n <= 15

// Sample Input 1
// 4

// Sample Output 1
// 4

// Explanation 1
// T3 = T2 + T1 + T0 = 1 + 1 + 0 = 2

// T4 = T3 + T2 + T1 = 2 + 1 + 1 = 4



function tribonnaci(n){
    if(n==0){
        return 0;
    }
    else if(n==1||n==2){
        return 1;
    }

    return tribonnaci(n-1)+tribonnaci(n-2)+tribonnaci(n-3)
}

console.log(tribonnaci(4))