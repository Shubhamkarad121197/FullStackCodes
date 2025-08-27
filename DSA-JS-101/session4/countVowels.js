// Given a string, count the total number of vowels present in that string.

// Input format
// First line contains the given string.

// Output format
// Print the total number of vowels.

// Sample Input 1
// language

// Sample Output 1
// 4

// Explanation
// There are total 4 vowels in the string "language" i.e. 'a', 'u', 'a', 'e'.

function countVowels(str){
    let vowels= new Set(['a','e','i','o','u','A','E','I','O','U']);

    let left=0,right=str.length-1;
    let count=0;
    while(left<right){
        if(vowels.has(str[left])) count++;
        if(vowels.has(str[right])) count++;

        left++;right--
    }

    return count;

}

console.log(countVowels('Shubham'));
console.log(countVowels('language'));