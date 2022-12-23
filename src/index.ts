let message : string = "Hello World!";
console.log(message);

// function to add two numbers
const addNumbers = (a: number, b: number) => {
    console.log("in addNumbers");
    let sum: number = a + b;
    return sum;
} // end addNumbers

console.log(addNumbers(10, 15));