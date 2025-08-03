// Task: Sort an array of objects by age

// Create an array array that contains objects with name and age properties. Use the following data:

let arr=[
{ name: "Kevi", age: 25 },

{ name: "Arnold", age: 6 },

{ name: "Sheila", age: 56 }
]
// Use the sort method to sort the array in ascending order based on the age property. Log the names of the people to the console in the ascending order of their ages.

// Implement your code like this:

arr.sort((a,b)=>a.age-b.age);
console.log(arr);