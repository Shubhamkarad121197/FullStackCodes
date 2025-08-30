let arr=[10,20,10,5,15]
function prefixSum(arr){
    let prefixSumArr=[];
    prefixSumArr[0]=arr[0];
    for(let i=1;i<arr.length;i++){
        prefixSumArr[i]=prefixSumArr[i-1]+arr[i]
    }

    return prefixSumArr;
}


console.log(prefixSum(arr))
