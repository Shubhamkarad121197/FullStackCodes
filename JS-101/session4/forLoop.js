let repeatation=5;
for(let i=0;i<5;i++){
    console.log("This is number",i)
}

// Write a JavaScript program to perform the following steps:
// Step 1: Create an empty array
// Step 2: Add elements to the array at the specified indexes:
// Set the value 1 at index 0
// Set the value "Hello" at index 1
// Set the value true at index 2
// Set the value "Piotr" at index 3
// Step 3: Print the second value (index 1) of the array
// Step 4: Update the value at index 3 to your own name
// Step 5: Print the updated array

let arr=[];
arr[0]=1;
arr[1]='Hello'
arr[2]=true;
arr[3]="Piotr"

console.log(arr[1])
arr[3]='Shubham'
console.log(arr);


let a = [1, 2, 3];

let b = [1, 2, 3];

let c = a;


console.log(a === b);	//false			

console.log(a == b); //false

console.log(a === c);	//true			

console.log(a == c); //true