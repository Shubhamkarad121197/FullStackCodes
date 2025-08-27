let arr=[23,45,6,34,67,12,76];

function findMaxAndMin(arr){
    let maxNum=arr[0];
    let minNum=arr[0]
    for(let i=0;i<arr.length;i++){
        maxNum=Math.max(maxNum,arr[i]);
         minNum=Math.min(minNum,arr[i]);
    }

    return `maxNum:${maxNum} and MinNum:${minNum}`
}

console.log(findMaxAndMin(arr))