"use strict";
let message = "Hello World!";
console.log(message);
// function to add two numbers
const addNumbers = (a, b) => {
    console.log("in addNumbers");
    let sum = a + b;
    return sum;
}; // end addNumbers
console.log(addNumbers(10, 15));
