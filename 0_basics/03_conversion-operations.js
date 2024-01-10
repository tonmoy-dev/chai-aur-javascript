// Data Type conversion

// To check the data type of any variable
let num = 123;

console.log(typeof num);    // typeof variableName
console.log(typeof (num));  // typeof(variableName)

/*
// --- when we are taking a string ---
num = "123abc";
console.log(typeof num);    // string

let valueInNum = Number(num);   // string conversion to number
console.log(valueInNum);    // NaN
console.log(typeof valueInNum);     // number

*/
// ## NaN -- it is a special type.

/*
// --- when we are taking boolean (false) as a value ---
levalue = false;    // true = 1; false = 0
console.log(typeof value);    // boolean

let valueInNum = Number(value);   // boolean conversion to number
console.log(valueInNum);    // 0
console.log(typeof valueInNum);     // number
*/
/*
// --- when we are taking undefined ---
let value = undefined;  
console.log(typeof value);    // undefined

let valueInNum = Number(value);   // undefined conversion to number
console.log(valueInNum);    // NaN
console.log(typeof valueInNum);     // number
*/
/*
// --- when we are taking null ---
let value = null;  
console.log(typeof value);    // object

let valueInNum = Number(value);   // null conversion to number
console.log(valueInNum);    // 0
console.log(typeof valueInNum);     // number
*/
/*
// to boolean conversion
console.log(Boolean(1));    // true
console.log(Boolean(0));    // false
console.log(Boolean(""));   // false
console.log(Boolean("ab")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined));    // false
*/
/*
// to string conversion
console.log(typeof String(1234));    // string
console.log(typeof String(null)); // string
console.log(typeof String(undefined));    // string
*/


/*
--- something to number --- Num()
// "11" -> 11
// "11ab" -> NaN
// true -> 1; false -> 0
*/

/*
--- something to boolean --- Boolean()
// 1 -> true
// 0 -> false
// "" -> false 
// "abc" -> true 
*/




 