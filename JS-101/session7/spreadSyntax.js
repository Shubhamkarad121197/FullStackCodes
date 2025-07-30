// Problem Description
// Task 1: Understanding Spread Syntax
// You will use the spread syntax to update a user profile with new information.
// Predict the output when updating the user profile using spread syntax.


const userProfile = {
    name: "John",
    age: 30,
    email: "john@example.com"

};


// New information to be added

const updatedInfo = {
    age: 31,
    city: "New York"
};

const updatedProfile={
    ...userProfile,
    ...updatedInfo
}

console.log(updatedProfile)


const arr1 = [1,2,3];

const arr2 = [4,5,6];

const resArr = [...arr1, ...arr2];

console.log(resArr);
