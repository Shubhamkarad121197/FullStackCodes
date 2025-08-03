// Using forEach without Arrow syntax

// Create an array nums containing the numbers 1 through 4. Use the forEach method to iterate over the array and log each value using a regular function (not an arrow function).

let nums=[1,2,3,4];

nums.forEach((res)=>console.log(res))

// Create an array nums containing the numbers 1 through 4. Use the forEach method to iterate over the array and log both the element and its index.

nums.forEach((res,index)=>{
    console.log(`Element is ${res} of ${index}`)
})
