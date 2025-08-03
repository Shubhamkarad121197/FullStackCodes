// Problem Description
// Task: Filter Products by Category

// Create an array products containing objects that represent products. Each object should have name, category, and price properties. Use the following data:


// { name: 'Laptop', category: 'Electronics', price: 1200 }

// { name: 'Shirt', category: 'Apparel', price: 50 }

// Add more products as needed. Use the filter method to create a new array filteredProducts that contains only the products in the electronics category. Print the filteredProducts array to the console.

// Implement your code like this:

let products=[
  { name: 'Laptop', category: 'Electronics', price: 1200 },
  { name: 'Shirt', category: 'Apparel', price: 50 },
  { name: 'Phone', category: 'Electronics', price: 800 },
  { name: 'Jeans', category: 'Apparel', price: 60 },
  { name: 'Book', category: 'Education', price: 20 },
  { name: 'Table', category: 'Furniture', price: 150 }
]


let filteredProduct=products.filter((res)=>res.category=='Electronics');
console.log(filteredProduct)