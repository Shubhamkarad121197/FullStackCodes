// Write a JavaScript program that manages a to-do list using an array and a function to add new items based on their priority.
// Requirements:
// Step 1: Create an empty array named todoDB to store to-do items.
// Step 2: Write a function addTodo(item, priority) that:
// Takes two parameters:
// item (a string representing the to-do item)
// priority (a string that can be either 'high' or anything else)
// If the priority is 'high', the item should be added at the start of the todoDB array
// Otherwise, the item should be added at the end of the todoDB array
// After each addition, print the updated todoDB array to show the current state of the array

let todoDB=[];


function addTodo(item,priority){
    if(priority=='high'){
        todoDB.unshift(item);
    }
    else{
         todoDB.push(item);
    }
    return todoDB;
}

addTodo('wake up early','high')
addTodo('scrolling insta reels','low')
addTodo('Take a bath','high')
addTodo('have a breakfast','low')

console.log(todoDB)