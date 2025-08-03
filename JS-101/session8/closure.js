
 function parentFunction() {

  //Lexical Scope of childFunction() START

  const message = "Hi! I'm a message from parent";


  function childFunction() {

    console.log(message);

  }


  return childFunction;

  //Lexical Scope of childFunction() END

}


const ans = parentFunction();

ans();


function multiply(storedNum) {

    return function(num) {

        return storedNum * num;

    }

}


const multiplyTwo = multiply(2);

const multiplyThree = multiply(3);

const multiplyFour = multiply(4);


console.log(multiplyTwo(5));

console.log(multiplyThree(6));

console.log(multiplyFour(7));



