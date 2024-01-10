// ------ Comparison of Data and Data types ------
// Comparison and Logical operators are used to test for true or false.

let x;
console.log(x == null); // true
console.log(x == undefined);    // true
console.log(x == "");   // false
console.log(x != null); // false
console.log(x != undefined); // false

// console.log(!null); // true
// console.log(!undefined); // true

/*
# Comparison Operators
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
*/

/*
# when you comparing the data, always check that the data types of the two variables are same or not.
### Don't compare two different types of data.

console.log("2" == 1);  // false

comparision with null 
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true

The reason is that an equality check == and comparisions >, >=, <=; works differently.
In comparisions converting null to a number, treating is as 0,
that's why null >= 0 is true; and null > 0 is false.

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

// These are not a good practice in coding. Try to avoid these type of comparisions with null or undefined.
*/

/*
# In Javascript, comparision and equality check works differently.

// === -- equality check -- check values and also data types
console.log("1" == 1); // true  -- it only checks the data
console.log("1" === 1); // false    -- it checks the data and data type

*/

/*
## Logical Operators
&&	and
||	or
!	not

// let x = 4, y = 4;
// console.log((x < 10 && y > 1)); // true
// console.log((x == 5 || y == 5)); // false
// console.log(!(x == y)); // false
*/

/*
## Conditional (Ternary) Operator
variablename = (condition) ? value1:value2 

// let age = 20;
// let voteable = (age < 18) ? "Too young" : "Old enough";
// console.log(voteable); // Old enough
*/

/*
## The Nullish Coalescing Operator (??)
-- The ?? operator returns the first argument if it is not nullish (null or undefined).

// let fname = null;
// let text = "missing";
// let result = fname ?? text;
// console.log("this is " + result);
*/

/*
## The Optional Chaining Operator (?.)
-- The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).

// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};
// Ask for car name:
document.getElementById("demo").innerHTML = car?.name;  // undefined
// the property name is not defined in the car object.
*/