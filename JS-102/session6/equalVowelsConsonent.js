// Problem Description
// Given a string, write a program to check if it consists of equal number of vowels and consonants.

// Input format
// First line contains an string str consisting of lowercase english alphabets.

// Output format
// Return true if the string contains equal number of vowels and consonants else return false.

// Sample Input 1
// ab

// Sample Output 1
// true

// Explanation
// string "ab" contains one vowel (a) and one consonant (b).

function equalVowelsAndConsonent(str){
    let vowels=new Set(['a','e','i','o','u','A','E','I','O','U']);
    let countVowels=0;
    let countConsonant=0;
    for(let char of str){
        if(vowels.has(char)){
            countVowels++;
        }
        else if(char>='a'&& char<='z'){
            countConsonant++;
        }
    }
    if(countVowels==countConsonant){
        return true;
    }
    return false;
}

console.log(equalVowelsAndConsonent('ab'));
console.log(equalVowelsAndConsonent('abcei'));
