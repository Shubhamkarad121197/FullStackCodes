// Problem Description
// You are given a list of words present in a book. Find out the count of unique words present in that book.

// Input format
// The first input line has an integer n where n is the number of words.

// Further n subsequent lines have word s[i].

// Output format
// Return the count of unique words in the list.

// Sample Input 1
// 7

// Java

// is

// great

// Grails

// is

// also

// great

// Sample Output 1
// 5

// Explanation
// Unique words present in the list are : Java,is,great,Grails,also

function uniqueWords(n,s) {

  let setVal=new Set(s)
   return setVal.size;
}
let arr=["Java","is","great","Grails","is","also","great"]
function uniqueWord(arr){
    let newSet=new Set(arr);
    return newSet.size;
}
console.log(uniqueWords(arr))