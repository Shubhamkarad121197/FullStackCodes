// Problem Description
// Given an array of integers as input, output the indices of two numbers in the array which add up to a specified target.

// Assume that each input would have exactly one solution and you cannot use the same element twice. If 2 different elements have the same value, they can be used.

// Print the indices in increasing order.

// Input format
// First line contains an Integer N that represents the number of elements in the array.

// Second line contains N space separated integers, which are members of the array.

// Third line contains an integer X, which is the target value.

// Output format
// Print two space separated indices(in increasing order) of the numbers which add up to the specified target.

// Constraints
// 2 <= Length of array <= 100000

// 1 <= Range of values <= 1000000

// Sample Input 1
// 5 --> Number of elements in array

// 2 4 5 9 8 --> Array elements

// 7 --> Target sum value

// Sample Output 1
// 0 2

// Explanation 1
// Since 0 and 2 are the indices where the numbers 2 and 5 which add up to 7 are seen

let arr = [2, 4, 5, 9, 8];
let target = 7; 
//Brute Force Approach
// function pairOfUnsortedArr(arr,target){
//     let result=[]
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//             if(target==arr[i]+arr[j]){
//                 return [i,j]
//             }
//         }
//     }
//     return -1;
// }
// console.log(pairOfUnsortedArr(arr,target));

function pairOfUnsortedArr(arr,target){
    let newMap=new Map();
    for(let i=0;i<arr.length;i++){
        let diff=target-arr[i];
        if(newMap.has(diff)){
            let indexOfDiff=newMap.get(diff)
            return [Math.min(i,indexOfDiff),Math.max(i,indexOfDiff)]
        }

        newMap.set(arr[i],i)
    }
    return [];
}

console.log(pairOfUnsortedArr(arr,target));

