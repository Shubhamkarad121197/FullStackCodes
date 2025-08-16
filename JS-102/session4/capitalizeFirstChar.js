// Given a paragraph of words, capitalize the first character of each word and return the paragraph.

// Input format
// First line contains a string - The paragraph.

// Output format
// Print the paragraph after capitalizing each word.

// Sample Input 1
// the quick Brown fox jumps over The lazy dog.

// Sample Output 1
// The Quick Brown Fox Jumps Over The Lazy Dog.

// Explanation
// Each word has it’s first character capitalized

function capitalizeFirstWord(str){
    let spittedString=str.split(' ');
    let newArr=spittedString.map((res)=>res[0].toUpperCase()+res.slice(1))
    return newArr.join(' ');
}

console.log(capitalizeFirstWord('the quick Brown fox jumps over The lazy dog.'))

