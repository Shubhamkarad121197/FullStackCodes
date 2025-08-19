// Write a program that takes a list of words arr[] as input and returns the most occurring word in arr[].

// It is guaranteed that if there are multiple words with the same frequency, the program should return the lexicographically minimum string among them.

// Input format
// The first line contains an integer N, the number of words in the array.

// The next N lines contain the words in the array.

// Output format
// Return the most occurring word in the array.

// Sample Input 1
// 4
// hello
// world
// crio
// crio

// Sample Output 1
// crio

// Explanation
// In this case, "crio" is the most frequent word, occurring 2 time.

// Sample Input 2
// 5
// crio
// for
// learn
// a
// learn

// Sample Output 2
// learn

function maxReapeatingWord(arr){
    let countMap=new Map();
    for(let word of arr){
        if(countMap.has(word)){
            countMap.set(word,countMap.get(word)+1)
        }
        else{
            countMap.set(word,1)
        }
    }
    let maxCount=0;
    let maxWord=''
    for(let [word,count] of countMap.entries()){
        maxCount=Math.max(maxCount,count)
        maxWord=word
    }
    return maxWord;
}

let arr=['hello','world','crio','crio'];
console.log(maxReapeatingWord(arr))