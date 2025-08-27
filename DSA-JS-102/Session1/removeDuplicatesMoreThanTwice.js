// Given a sorted array, remove the duplicates in-place, such that each element in the array appears at most twice, and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Input format
// There are two lines of input.

// First line contains an integer n - Number of elements.

// Second line contains n space separated integers - The array nums.

// Output format
// Print the new length in the first line.

// In the second line print the nums array upto the new length.

// Sample Input 1
// 7

// 2 2 2 3 4 4 9

// Sample Output 1
// 6

// 2 2 3 4 4 9

// Explanation 1
// Your function should return 6 as the element 2 can only be present at most 2 times. So the first 6 elements of array nums should be modified to [2, 2, 3, 4, 4, 9].

let arr=[2, 2, 2, 3, 4, 4, 9];
//Brute Force Approach
// function duplicateRemoveMoreTwice(arr){
//    let result=[];
//    for(let num of arr){
//     if(result.length<2||num!==result[result.length-2]){
//         result.push(num)
//     }
//    }
//    return result;
// }

// console.log(duplicateRemoveMoreTwice(arr));


function duplicateRemoveMoreTwice(arr) {
   let newMap=new Map();
   let result=[];
   for(let i=0;i<arr.length;i++){
    let count=newMap.get(arr[i])||0;
    if(count<2){
        result.push(arr[i]);
        newMap.set(arr[i],count+1)
    }
   }
   return result;
}


console.log(duplicateRemoveMoreTwice(arr));

