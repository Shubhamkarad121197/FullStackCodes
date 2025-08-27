// You are given a string S and you have to implement a function to perform basic string compression, using the counts of repeated characters.

// If the "compressed" string would not become smaller than the original string, your function should return the original string.

// You can assume the string has only uppercase and lowercase letters (a - z).


// Input format
// A single line that contains the string S.


// Output format
// A single line that represents the compressed string as specified in the problem.


// Sample Input 1
// aabccccc


// Sample Output 1
// // a2b1c5

function compressString(str){
    let countMap=new Map();

    for(let char of str){
        if(countMap.has(char)){
            countMap.set(char,countMap.get(char)+1);
        }
        else{
            countMap.set(char,1)
        }
    }
    let newString=''
    for(let [char,count] of countMap.entries()){
        newString+=char+count
    }
    if(newString.length>str){
        return str;
    }
    return newString;
}
let str='aabccccc'
console.log(compressString(str));