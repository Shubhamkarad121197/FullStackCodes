// Task: Calculate the area of circle

// Create an array radii containing the radii of circles. Use the following data: [10, 30, 50].

// Create a function calculateArea that takes the radius as a parameter and returns the area of the circle using the formula:

// Area = 𝜋 × radius^2.

// Use the map method to calculate the area of each circle and push the results into a new array areas. Log the areas array to the console.

const radii=[10,30,50];
 function calculateArea(radii){
    return radii.map((res)=>Math.PI*res**2)
 }

 console.log(calculateArea(radii))