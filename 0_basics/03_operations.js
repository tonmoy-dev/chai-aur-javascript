// -------- Operations -----------

let value = 1;
// negValue = -value;
// console.log(negValue);  // -1

// string concatenation
// let str1 = 'Hello';
// let str2 = ' JS';
// let str3 = str1 + str2;
// console.log(str3);  // Hello JS

// ------ the horror part ------
// console.log("0" + 1);   // 01
// console.log(0 + "1");   // 01
// console.log(1 + 1 + "2");   // 22   // not good coding
// console.log("1" + 1 + 2);   // 112  // not good coding

// console.log(typeof("0" + 1));   // string
// console.log(typeof(0 + "1"));   // string
// console.log(typeof(1 + 1 + "2"));   // string
// console.log(typeof("1" + 1 + 2));   // string

// !!! Don't write confusing code. Focus on code readability.

// link to study -- details in type conversion
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

/*
// prefix and postfix --- docs on MDN 
// postfix -- x++
// prefix -- ++x
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
*/

