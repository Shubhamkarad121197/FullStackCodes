// Problem Description
// Given a sorted array of integers and a target, find if there’s a pair of elements that add up to the target. Return true if such a pair can be found, and false otherwise.

// Input format
// There are 3 lines of input.

// First line contains an Integer N that represents the number of elements in the array.

// Second line contains N space-separated integers, which are members of the array.

// Third line contains an integer X, which is the target value.

// Output format
// Return a boolean, true representing "Present" and false representing “Not Present”

// NOTE: Do not return a string ("Present" or “Not Present”)

// Constraints
// 2 <= Length of array <= 10^5

// 1 <= Range of values <= 10^6

// Sample Input 1
// 5

// 2 4 5 8 9

// 7

// Sample Output 1
// Present


function findPairOfSortedArr(arr,target){
    let left=0,right=arr.length-1;
    while(left<right){
        let sum=arr[left]+arr[right]
        if(sum==target){
            return 'Present'
        }
        if(sum<target){
            left++;
        }else{
             right--;
        }
        
       
    }
    return 'Not Present'
}
let arr=[2,4,5,8,9]
let target=21
console.log(findPairOfSortedArr(arr,target))