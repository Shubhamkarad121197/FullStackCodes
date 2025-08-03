// 🔹 .splice() – Modifies the original array
let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];

// Remove 2 elements from index 1, and insert 'Pineapple', 'Kiwi'
fruits.splice(1, 2, 'Pineapple', 'Kiwi');

console.log(fruits);
[ 'Apple', 'Pineapple', 'Kiwi', 'Orange', 'Grapes' ]
// ✔️ splice(startIndex, deleteCount, ...itemsToInsert)

// 🔹 .slice() – Returns a new array (does NOT modify original)

let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];

// Get elements from index 1 up to (but not including) index 4
let slicedColors = colors.slice(1, 4);

console.log(slicedColors); // [ 'Green', 'Blue', 'Yellow' ]
console.log(colors);       // Original array is unchanged