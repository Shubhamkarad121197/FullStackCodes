// A "Zombie" has entered a village and is going to eat the person who is next to him.
// Implement the function zombieAttack() that
// Accepts an array of strings arr, with each element being a person’s name or the "Zombie"
// Return a string with the name of the person who will be eaten, i.e., the person after "Zombie" in arr

// Note
// It is guaranteed that there will always be at least one person to the right of the zombie.
// There will be only one "Zombie" in the array, arr.

// Hints
// Use a loop to iterate through the array and use string comparison to find the "Zombie" element.
// When you find the "Zombie", remember its index and find the person after it.


let zombieArr=['Rameo', 'Kevin', 'Zombie', 'Jacky', 'Adam']
function zombieAttack(zombieArr){
    let indexOfZombie=zombieArr.indexOf('Zombie');
    return  `zombie is going to eat ${zombieArr[indexOfZombie+1]}`
}

console.log(zombieAttack(zombieArr))