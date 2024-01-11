/*
## On the basis of keeping data in the memory and accessing that data,
-- there are 2 data types:
1. primitive data type
2. non-primitive/ reference data type

# primitive types are -- call by value
# non-primitive/ reference types are -- call by reference

*/

// -------------------------------
//  Primitive
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Number
// console.log(typeof 100.3); // number

// String
// console.log(typeof "hello");    // string

// Boolean
const isLoggedIn = false;
// console.log(typeof isLoggedIn); // boolean

// null
const outsideTemp = null;
// console.log(typeof outsideTemp);    // object

// undefined  -- variable is declared but the value is not defined
let userEmail;
// console.log(typeof userEmail);  // undefined

// symbol -- used to make a value, unique
const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId);  // false
// console.log(typeof anotherId);  // symbol

// const bigNumber = 34n;
// console.log(typeof bigNumber); // bigint

// -------------------------------
// Reference (Non primitive) -- 3 types
// Array, Objects, Functions

// Array
const heros = ["ironMan", "hulk", "thor"];
// console.log(typeof heros);  // object

// Objects
let person = {
  name: "rx",
  age: 26,
};
// console.log(typeof person); // object

// Functions
const myFunction = function () {
  console.log("Hello world");
};
// console.log(typeof myFunction); // function

// data types docs --- https://262.ecma-international.org/5.1/#sec-11.4.3
// ------------------------------

/*
// Is JavaScript a dynamically typed language?
-- Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.

-- JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
*/

/*
------- Summary -------
// Numbers
typeof 37 === "number";
typeof 3.14 === "number";
typeof 42 === "number";
typeof Math.LN2 === "number";
typeof Infinity === "number";
typeof NaN === "number"; // Despite being "Not-A-Number"
typeof Number("1") === "number"; // Number tries to parse things into numbers
typeof Number("shoe") === "number"; // including values that cannot be type coerced to a number

typeof 42n === "bigint";

// Strings
typeof "" === "string";
typeof "bla" === "string";
typeof `template literal` === "string";
typeof "1" === "string"; // note that a number within a string is still typeof string
typeof typeof 1 === "string"; // typeof always returns a string
typeof String(1) === "string"; // String converts anything into a string, safer than toString

// Booleans
typeof true === "boolean";
typeof false === "boolean";
typeof Boolean(1) === "boolean"; // Boolean() will convert values based on if they're truthy or falsy
typeof !!1 === "boolean"; // two calls of the ! (logical NOT) operator are equivalent to Boolean()

// Symbols
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";

// Undefined
typeof undefined === "undefined";
typeof declaredButUndefinedVariable === "undefined";
typeof undeclaredVariable === "undefined";

// Objects
typeof { a: 1 } === "object";

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === "object";

typeof new Date() === "object";
typeof /regex/ === "object";

// The following are confusing, dangerous, and wasteful. Avoid them.
typeof new Boolean(true) === "object";
typeof new Number(1) === "object";
typeof new String("abc") === "object";

// Functions
typeof function () {} === "function";
typeof class C {} === "function";
typeof Math.sin === "function";

// This stands since the beginning of JavaScript
typeof null === "object";
*/
