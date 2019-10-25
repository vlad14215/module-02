"use strict";

let userInput;
const numbersArr = [];
const countArr = [];
let total = 0;

do {
    userInput = prompt('enter your numbers..');
    if (userInput !== '' && userInput !== null) {
        let inputNumber = Number(userInput) 
        countArr.push(inputNumber);
        total += inputNumber;
    }

} while (userInput !== null);

console.log(countArr);
console.log(numbersArr);
console.log(total);


// let input = 0;

// do {
//   input = Number( prompt('Введите число больше 10', '') );
// } while(input <= 10);