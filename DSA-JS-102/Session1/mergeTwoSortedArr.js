// Given two sorted arrays of size M and N, merge the two arrays and return the final array, sorted.

// Input format
// A single Integer M, that contains the number of elements in the first array.

// A single Integer N, that contains the number of elements in the second array.

// Next Line contains M space Integers of the array nums1.

// Next Line contains N space Integers of the array nums2.

// Output format
// Print the array after merging.

// Sample Input 1
// 3

// 3

// 1 2 3

// 2 5 6

// Sample Output 1
// 1 2 2 3 5 6
//BruteForce Approach
// function mergeTwoSortedArr(arr1,arr2){
//   let mergeArr=[...arr1,...arr2];
//   let sortedArr=mergeArr.sort((a,b)=>a-b);

//   return sortedArr;
// }

function mergeTwoSortedArr(arr1,arr2){
    let mergeArray=[];
    let i=0,j=0;

    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            mergeArray.push(arr1[i])
            i++;
        }
        else{
            mergeArray.push(arr2[j])
            j++;
        }
    }
    while(i<arr1.length){
        mergeArray.push(arr1[i]);
        i++
    }
     while(j<arr2.length){
        mergeArray.push(arr2[j]);
        j++
    }
    return mergeArray

}



let arr1=[1,2,3] ,arr2=[2,5,6]
console.log(mergeTwoSortedArr(arr1,arr2))