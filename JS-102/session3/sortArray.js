// Problem Description
// Given an array of n strings. Sort the array in lexicographical order.

// Input format
// First line contains integer n.

// Next line contains n space separated strings.

// Output format
// Print the sorted array.

// Sample Input 1
// 4

// abc abd ab a

// Sample Output 1
// a ab abc abd

// Explanation
// The given array is sorted in lexicographical order.

// Constraints
// 1 <= n <= 10000

// Strings contain only lowercase english alphabet.

// Each string will have length no more than 15.


let string="abc abd ab a"

function sortString(string){
    let splitString=string.split(" ");
   for(let i=0;i<splitString.length;i++){
    for(let j=0;j<splitString.length;j++){
        if(splitString[i]<splitString[j]){
            [splitString[i],splitString[j]]=[splitString[j],splitString[i]]
        }
    }
   }
   return splitString.join(" ")
}

console.log(sortString(string))