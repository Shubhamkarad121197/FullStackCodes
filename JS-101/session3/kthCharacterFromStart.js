function kthCharFromStart(str,k){
    return str[k-1]
}

console.log(kthCharFromStart('Shubham',2))
console.log(kthCharFromStart('Ramesh',3))
console.log(kthCharFromStart('Pawanbhai',4))


function kthCharFromEnd(str, k){
  
  return str[str.length-k];
}

console.log(kthCharFromEnd('Shubham',2))
console.log(kthCharFromEnd('Ramesh',3))
console.log(kthCharFromEnd('Pawanbhai',4))

