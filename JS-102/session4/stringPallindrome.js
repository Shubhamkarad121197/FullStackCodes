// Problem Description
// Given a string comprising only lowercase alphabets, determine whether it qualifies as a palindrome.

// A string is considered a palindrome if it reads the same forwards and backwards.

// Note:
// For the purpose of this problem, we define empty string as valid palindrome.

// Input format
// The only line contains a string.

// Output format
// True or False.

// Sample Input 1
// madam

// Sample Output 1
// true

// Explanation
// "madam" spelt backwards is "madam", therefore, it is a palindrome.

// Sample Input 2
// crio

// Sample Output 2
// false

function stringPallindrome(str){
    let splittedString=str.split('');
    let left=0,right=splittedString.length-1;
    while(left<right){
        if(splittedString[left]!=splittedString[right]){
            return false;
        }
        left++;
        right--;
    }

    return true;

}

console.log(stringPallindrome('madam'));
console.log(stringPallindrome('crio'));
