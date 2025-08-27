function gcd(a,b){
    if(b==0){
        return a;
    }

    return gcd(b,a%b)
}

function gcdOfArray(n,arr) {

    let result=0
    for(let i=0;i<n;i++){
        result=gcd(result,arr[i])
    }
    return result;
}

let arr=[4, 6, 8, 16];
console.log(gcdOfArray(4,arr))