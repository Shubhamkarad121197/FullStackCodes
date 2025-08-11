// Problem Description
// Implement the function extractNumbers() that

// Accepts two arguments a number N and an array arr containing a mix of strings and numbers (in string type)

// Returns a new array that retains only the numbers present in the original array in the same order.


// Example: from the provided array arr = [a, 1, b, 2, c, d, 3, 4, e], the output array should contain [1, 2, 3, 4]. The numbers in the original array can be single or multiple digits, and there may be strings interspersed among them.

// Note
// The numbers in the array are also of string type.

// The order of integers in the input array must be maintained.


// Input format
// First line is an integer N: the number of elements in the input array Second line is arr: the elements of the input array


function extractNumber(arr){
    let numValues=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            numValues.push(arr[i])
        }
    }
    return numValues;
}
let arr=['a', 1, 'b', 2, 'c', 'd', 3, 4, 'e']
console.log(extractNumber(arr))