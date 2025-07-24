const student = [
  {
      name: "Kevin",
      std_id: 10
  },
  {
     name: "Austin",
     std_id: 20
  },
  {
      name: "Robin",
      std_id: 30
  }
];

console.log(student[1].name);        // Output: Austin
console.log(student[2]['std_id']);   // Output: 30


// Task2
// Given an array of objects student as an argument to a function getStudentWithMaxMarks, we have to return the name of the student with maximum marks and print it on the console.

// Note: Length of the array is always greater than 0

var students = [
  {
      name: "Kevin",
      std_id: 10,
      marks: 25

  },

  {
     name: "Austin",
     std_id: 20,
     marks: 30

  },

  {

      name: "Robin",
      std_id: 30,
      marks: 20

  }


]

function getStudentWithMaxMarks(students){
    let maxMarks=students[0].marks;
    let studName=students[0].name
    for(let student of students){
        if(student.marks>maxMarks){
            maxMarks=student.marks;
            studName=student.name
        }
        
    }
    return [studName,maxMarks]
    
}
console.log(getStudentWithMaxMarks(students));