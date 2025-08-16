// Write a program that reverses a string.

// Input format
// First line will be a single string

// Output format
// 1<=size(S)<=200000

// Sample Input 1
// abc

// Sample Output 1
// cba

// Explanation
// cba is reverse of abc.

// Sample Input 2
// aaa

// Sample Output 2
// aaa

// Explanation
// aaa is reverse of aaa.

function reverseString(str){
    let splittedString=str.split('');
    let left=0,right=splittedString.length-1;

    while(left<right){
        [splittedString[left],splittedString[right]]=[splittedString[right],splittedString[left]];
        left++;right--;
    }

   return splittedString.join('')
}

console.log(reverseString('cba'))
console.log(reverseString('xyz'))
console.log(reverseString('yyy'))