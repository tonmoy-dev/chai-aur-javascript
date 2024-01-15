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


