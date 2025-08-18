// Problem Description
// Write a program to reverse the words present in a sentence.

// Input format
// First line contains an string consisting of words separated by spaces.

// Output format
// Return the string with it's words reversed.

// Sample Input 1
// abc def ghi

// Sample Output 1
// cba fed ihg

// Explanation
// abc reversed is cba, def reversed is fed, ghi reversed is igh.

function reverseCharacterOfWord(str){
    let arr=str.split(' ');
    let newArr=arr.map((res)=>res.split('').reverse().join(''))

    return newArr.join(' ');
}

let str='abc def ghi';
console.log(reverseCharacterOfWord(str));