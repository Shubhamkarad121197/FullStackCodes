


function setAlarm(funcToExecuteLater){

   console.log("Wake up at 7am");

   //once the work is done

   funcToExecuteLater();

}


function ringAlarm(){

   console.log("Wake up !!! Its time to live your dreams");

}


setAlarm(ringAlarm);



function sum(n1, n2) {

console.log(n1 + n2);

}


function multiply(n1, n2) {

console.log(n1 * n2)

}

function calculator(num1, num2, operation) {

console.log(`Calculating on ${num1} and ${num2}`)

operation(num1, num2);

}

calculator(5, 5, sum);

calculator(5, 5, multiply); // different callback, different answer

