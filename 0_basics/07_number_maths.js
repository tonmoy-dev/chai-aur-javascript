// //=============================================================================
// // Number and Maths in JavaScript
// //=============================================================================

// Numbers ------------------
// declare a number
const score = 200;

// Number as NumberConstructor
const balance = new Number(4000);
// console.log(balance); // [Number: 4000]

// Number methods
// console.log(typeof balance.toString()); // string
// console.log(balance.toFixed(2)); // 4000.00 --- how to much decimal values need to show

const people = 100000000;
// console.log(people.toLocaleString("en-IN")); // 10,00,00,000

// Maths ---------------------
// console.log(Math); // Do it in Browser console

// console.log(Math.abs(-4));  // 4 -- changing negative value to positive value
// console.log(Math.round(4.6));   // 5 -- rounds a number to the nearest integer.
// console.log(Math.ceil(4.4)); // 5 -- rounded UP to the nearest integer.
// console.log(Math.floor(4.8)); // 4 -- rounds a number DOWN to the nearest integer.

// console.log(Math.max(3, 5, 6, 7, 1));   // 7 -- maximum
// console.log(Math.min(4, 6, 2, 6, 7));   // 2 -- minimum

// *** Math.random()
// console.log(Math.random()); // random value will be from 0 to 1 always.
// console.log(Math.random() * 10); // it will give 0 to 10 with decimal values
// console.log(Math.floor(Math.random() * 10) + 1); // it will give 1 to 11

// ***** To get numbers from 15 to 20
let min = 15,
  max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // values from 15 to 20.
