
let matrix = [

    [1, 2, 3],

    [4, 5, 6],

    [7, 8, 9]

];
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        console.log(matrix[i,j])
    }
}
console.log("------------------------------")
function printArray(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            console.log(`[${i},${j}]=${arr[i][j]}`)
        }
    }
}


let arr = [[0, 1], [2, 3], [4, 5]];
printArray(arr)