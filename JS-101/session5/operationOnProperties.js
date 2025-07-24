let student = {

    firstName: "Jane",

    lastName: "Smith",

    age: 20

};

student.fullName=`${student.firstName} ${student.lastName}`;





console.log(student.hasOwnProperty('isEngineer'));  

console.log(student.hasOwnProperty('fullName'));   


delete student.age;
