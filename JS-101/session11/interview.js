// // give me note files in one page
// // Got it — you basically want the full JavaScript notes from our previous conversation in a single, concise one-page document format so it’s easy to read or print.
// // Here’s your One‑Page JavaScript Notes:
 
// // JavaScript One‑Page Interview Notes
// // 1. Data Types
// Primitive (immutable, stack memory):
// •	String – "Hello"
// •	Number – 42, 3.14, Infinity, NaN
// •	Boolean – true / false
// •	Undefined – Declared, no value
// •	Null – Intentional empty value (object type bug)
// •	Symbol – Unique identifier (ES6)
// •	BigInt – Large integers (123n)
// Non‑Primitive (mutable, heap memory):
// •	Object, Array, Function, Date, Map, Set, RegExp, etc.
 
// 2. == vs ===
// Feature	== (Loose)	=== (Strict)
// Type Conversion	✅ Yes	❌ No
// Compares	Value only	Value + Type
// Recommended?	❌ No	✅ Yes

 
// 3. null vs undefined
// Feature	undefined (auto by JS)	null (manual)
// Meaning	Declared, no value	Empty on purpose
// Type	undefined	object

 
// 4. var / let / const
// Feature	var	let	const
// Scope	Function	Block	Block
// Re‑declare	✅ Yes	❌ No	❌ No
// Re‑assign	✅ Yes	✅ Yes	❌ No (except object props)
// Hoisting	undefined	TDZ Error	TDZ Error

// Best Practice: Use const → let → avoid var.
 
// 5. Hoisting
// •	var → Hoisted, init = undefined
// •	let / const → Hoisted, TDZ until declared
// •	Function declarations → Fully hoisted
// •	Function expressions → Follow variable hoisting rules
 
// 6. Closures
// Function + its lexical scope, even after parent returns:
// function outer() {
//   let count = 0;
//   return () => console.log(++count);
// }
// let counter = outer();
// counter(); // 1 → 2 → 3

 
// 7. Array Methods
// •	map → Transform, same length
// •	filter → Keep values passing test
// •	reduce → Reduce to single value
 
// 8. Callback Functions
// Pass a function to be called later:
// function greet(name, cb) { console.log(`Hi ${name}`); cb(); }

 
// 9. Destructuring
// Array:
// const [a, , b="def"] = [1]; // a=1, b="def"

// Object:
// const {name, age} = {name:"Shubham", age:25};

 
// 10. Function Types
// •	Expression:
// const add = function(a,b){return a+b;}

// •	Arrow:
// const addArrow = (a,b) => a+b;

 
// If you want, I can turn this into a PDF/Word note file so you can download and keep it.
// Do you want me to prepare that file for you?
