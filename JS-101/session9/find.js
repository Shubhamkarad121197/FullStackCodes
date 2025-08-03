// Create an array data that contains objects, each with an _id and name property. Include four objects with different names and IDs. Use the find method to search for an object in the array where the _id is equal to "1". Log the result of the find method to the console.

const data = [

  { _id: "1", name: "Vivek" },

  { _id: "2", name: "Neha" },

  { _id: "3", name: "Satya" },

  { _id: "4", name: "Amit" },

];

let findData=data.find((res)=>res._id=='1')
console.log(findData);