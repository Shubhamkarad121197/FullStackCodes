// Problem Description
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words.

// The returned string should only have a single space separating the words.

// Do not include any extra spaces.

// Input format
// String s.

// Output format
// The function should return a string of the words in reverse order concatenated by a single space.

// Sample Input 1
// hello world

// Sample Output 1
// world hello

let string="hello world";
function reverseWordInString(str){
    let arr=string.split(' ');
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            [arr[i],arr[j]]=[arr[j],arr[i]]
        }
    }

    return arr.join(' ')
}

console.log(reverseWordInString(string))