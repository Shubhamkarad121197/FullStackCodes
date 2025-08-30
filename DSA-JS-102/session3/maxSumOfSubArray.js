let arr=[100, 200, 300, 400]

function maxSumOfSubArray(arr,k){
    if(k>arr.length) return -1;
    let maxSum=0,windowSum=0
    for(let i=0;i<k;i++){
        maxSum+=arr[i]
    }
    windowSum=maxSum;
    for(i=k;i<arr.length;i++){
        windowSum+=arr[i]-arr[i-k]
        maxSum=Math.max(maxSum,windowSum);
    }

    return maxSum;
}

console.log(maxSumOfSubArray(arr,2));