function isFourDigitNumber(number){
    return number >= 1000 && number <= 9999;
}

function sumOfDigits(number){
    return number.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
}

function isPrime(number){
    if(number < 2) return false;
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0) return false;
    }
    return true;
}

function isPerfectSq(number){
    return Number.isInteger(Math.sqrt(number));
}

function driverfunction(numberPlate) {
    if (isFourDigitNumber(numberPlate)) {
        let sum = sumOfDigits(numberPlate);
        if (isPrime(sum)) {
            let newSum = sumOfDigits(sum);
            if (isPerfectSq(newSum)) {
                return "Miraculous";
            }
        }
    }
    return "Non Miraculous";
}

// Sample tests
if (driverfunction(1237) !== "Miraculous")
  console.log("Test fails: Expected Miraculous for numberPlate = 1237");
else console.log("Sample test case for numberPlate = 1237 passed!");

if (driverfunction(567) !== "Non Miraculous")
  console.log("Test fails: Expected Non Miraculous for numberPlate = 567");
else console.log("Sample test case for numberPlate = 567 passed!");

