// string declaration --
//  1st way -
const vehicle = "Bicycle";
const vehiclesCount = 20;

// console.log("No of " + vehicle + " are " + vehiclesCount);   // This code is outdated.
// No of Bicycle are 20

// String interpolation
// console.log(`No of ${vehicle}'s are ${vehiclesCount}`);     // Modern way
// No of Bicycle's are 20

// 2nd way -  StringConstructor
const gameName = new String('Deaths Game');     
// console.dir(gameName); // [String: 'Deaths Game'] 
// console.log(typeof gameName);   // object -- it will be key-value pairs and object properties
// console.log(`First key-value pair is 0 : "${gameName[0]}" and length = ${gameName.length}`);
// First key-value pair is 0 : "D" and length = 11

// string --- prototypical object methods
// console.log(gameName.charAt(2)); // a -- character in position 2
// console.log(gameName.indexOf('a')); // 2 --- a character in position 2
// console.log(gameName.slice(0,5));   // Death --- slicing the string
// console.log(gameName.split(' '));   // [ 'Deaths', 'Game' ]

// let movieName = "  Avatar  ";
// // need to remove the unwanted spaces
// console.log(movieName.trim());  // Avatar

// const url = "https://google.com/my%20page"
// console.log(url.replace('%20', '-'));   // https://google.com/my-page
// console.log(url.includes('home'));  // false


// Try to practice all string methods ...

/*
let book = "JavaScript";
// To calculate the length of the string -- .length -- The length property returns the length of a string
console.log(`Length of the string: ${book.length}`);	// Length of the string: 10

// #### To display a character at any index 
// 4 methods for extracting string characters: at(position), charAt(position), charCodeAt(position), Using property access [] like in arrays
console.log(book.charAt(0));	// J
console.log(book.at(3)); 	// a
let index = 4;
console.log(`Character at index ${index}: ${book.charAt(index)}`);	// S

*/
/*

// ##### Counting words -- 
// Split and count words in a sentence -- using split() method, length property
// A string can be converted to an array with the split() method. -- text.split(",")    // Split on commas

let loremIpsum = 'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain';
let words = loremIpsum.split(" ");	// Split on spaces

console.log(words);		// ['There', 'is', 'no', 'one', 'who', 'loves', 'pain', 'itself,', 'who', 'seeks', 'after', 'it', 'and', 'wants', 'to', 'have', 'it,', 'simply', 'because', 'it', 'is', 'pain']
console.log(`Number of words: ${words.length}`);	// Number of words: 22

*/

/*

// ##### To reverse a string
// Need 3 methods -- String.prototype.split() method, the Array.prototype.reverse() method and the Array.prototype.join() method.
// The split() method splits a String object into an array of string by separating the string into sub strings.
// The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
// The join() method joins all elements of an array into a string.

let movie = "Deaths Game";
console.log(movie.split("").reverse().join(""));	// emaG shtaeD

*/


