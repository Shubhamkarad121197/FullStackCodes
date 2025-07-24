
const ourStorage = {
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
  }
 };
console.log(ourStorage.cabinet)

console.log(ourStorage.cabinet['top drawer'])

ourStorage.cabinet['top drawer'].folder1='Few Files'
ourStorage.cabinet['top drawer'].folder2='Secreat Files'

console.log(ourStorage.cabinet['top drawer'].folder1)
console.log(ourStorage.cabinet['top drawer'].folder2)

//Guess the  Bot
const personalDetails = {

   name: "John Doe",
   designation: "Data Analyst",
   age: 24,
   address: {
      locality: "1600 roselane colony",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India"
   }
}
//What will be output?
console.log (personalDetails.address); //{
//       locality: "1600 roselane colony",
//       city: "Mumbai",
//       state: "Maharashtra",
//       country: "India"
//    }
console.log (personalDetails.address.city);  //Mumbai
console.log(personalDetails['address']['city']);//Mumbai

