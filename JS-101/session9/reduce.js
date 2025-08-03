// Task: Calculate total price with Reduce Method

// Create an array cart containing objects that represent items in a shopping cart. Each object should have item and price properties. Use the following data:

let arr=[
    { item: 'Book', price: 12.99 },
    { item: 'T-shirt', price: 19.99 }
]

const totalPrice=arr.reduce((acc,curr)=>{
    return acc+curr.price
},0
)
console.log(totalPrice);
