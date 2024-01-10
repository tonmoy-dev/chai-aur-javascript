// Data types and ECMA standards

"use strict"; // treat all JS code as newer version

// alert() // we're using nodejs, not brower

/* write readable codes - use semicolons after any statement 
# code readability should be high
*/

/* Read documnentaions in JavaScript
For ECMAScript standards - https://tc39.es/
MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript
*/
// The ECMAScript language types are Undefined, Null, Boolean, String, Symbol, Number, BigInt, and Object. 


let name = "rx"  // string
let age = 20  // number
let loggedIn = false  // boolean
let state = null  // null type

/*
Premitive data types
// number 
// bigint
// string => ""
// boolean => true/ false
// null => a standalone value too; but it is a representation of empty value
// undefined => declared variable but not assign any value
// symbol => means unique values
*/

// Non-premitive data type -- Object, Array, Function
// Object - a non-primitive data type that consists of unordered key-value pairs. 

// use 'typeof' keyword to check the datatype
console.log(typeof "devs")
console.log(typeof null)  // object
console.log(typeof undefined)  // undefined

