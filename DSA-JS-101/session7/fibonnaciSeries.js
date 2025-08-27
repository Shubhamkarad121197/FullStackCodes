
function fibonnaciSeries(n){
    if(n==0||n==1){
        return 1;
    }
    return fibonnaciSeries(n-1)+fibonnaciSeries(n-2)
}
let result=[]
for(let i=1;i<10;i++){
    // if(fibonnaciSeries(i)){
        result.push(fibonnaciSeries(i))
    // }
}

console.log(result)

