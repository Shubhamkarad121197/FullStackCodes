let arr = [10, 20, 10, 5, 15];

function suffixSum(arr) {
    let suffixSumArr = [];
    let n = arr.length;
    suffixSumArr[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixSumArr[i] = suffixSumArr[i + 1] + arr[i];
    }
    return suffixSumArr;
}

console.log(suffixSum(arr)); 
