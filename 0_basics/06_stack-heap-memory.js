// stack and heap memory

/* ---- Stack (Primitve)
## Stack memory used for primitive types data.
when we are using the value of primitive type data, we will get a copy from that data. 
The original value of that data will not be changed itself.

// Example
let personName = "tonmoy";
let personName2 = personName;
personName2 = "dip";

console.log(personName);    // tonmoy
console.log(personName2);   // dip
*/

/* ---- Heap (Non-Primitive)
Heap memory used for non-primitive types data.
We will get the reference value of that data for the non-primitive type data. It will change directly to the original data.

// Example
let person = {
  age: 24,
  email: "@gmail.com",
};
let person2 = person;
// console.log(person2);   // { age: 24, email: '@gmail.com' }
person2.age = 30;

console.log(person); // { age: 30, email: '@gmail.com' }
console.log(person2); // { age: 30, email: '@gmail.com' }
*/

// !! Original data is changed here because of using the reference value.
// because both variables reference the same memory location.

// While using stack, it will provide a copy of that data.
// On the other hand, While using heap, it will provide reference value of that data.

/*
// !!!!!!! Reference Values?
Reference values, on the other hand, are objects that are stored in memory and accessed through a reference. These include arrays, objects, and functions.

When we assign a reference value to a variable, a reference to the original value is created and stored in memory. Any changes made to the variable affect the original value.
*/
