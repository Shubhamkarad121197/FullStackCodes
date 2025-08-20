// Problem Description
// You are given a string str consisting of non-repeating lowercase English letters.
// Additionally, you have an array arr of strings, each containing non-repeating characters.
// Your task is to create a program that identifies and returns the strings from the arr that are anagrams of the given string str.

// The resulting array of strings should be in lexicographically sorted order.

// Input format
// The first line contains a string str (1 <= |str| <= 26), representing a sequence of non-repeating lowercase English letters.

// The second line contains an integer N (1 <= N <= 10^5), representing the number of strings in the arr.

// The next N lines each contain a string of non-repeating characters, representing the elements of the arr.

// Output format
// Return a array of strings containing only those strings from the input array that are anagrams of the given string str.

// Resultant array of string should be in sorted order.

// Sample Input 1
// abc

// 3

// cab

// bac

// xyz

// Sample Output 1
// bac

// cab

// Explanation
// Strings "cab" and "bac" are anagrams of the given string "abc".

// Sample Input 2
// crio

// 4

// iocr

// croi

// irco

// mxyn

// Sample Output 2
// croi

// iocr

// irco

// Explanation
// Strings "croi" , "iocr" and "irco" are anagrams of the given string "crio".
let arr = ["cab", "bac", "xyz", "acb"];

function findAllAnagrams(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let currentWord = arr[i];
    let sortedCurrent = currentWord.split('').sort().join('');
    
    let group = [];
    for (let j = 0; j < arr.length; j++) {
      let sortedWord = arr[j].split('').sort().join('');
      if (sortedWord === sortedCurrent) {
        group.push(arr[j]);
      }
    }

  
    group.sort();
    if (!result.some(r => r.join('') === group.join(''))) {
      result.push(group);
    }
  }

  return result;
}

console.log(findAllAnagrams(arr));

