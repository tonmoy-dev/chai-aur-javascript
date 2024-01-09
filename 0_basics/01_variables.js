// let, var, const

/*
-- const - used to declare a variable but that cannot be reassigned a new value.
-- let - used to declare a variable and that can be reassigned a new value.
-- Declaration of variables (4 ways) - automatically, var, let & const
-- Always try to use - const & let
-- Perfer not to use var - because of issue in block scope and functional scope 
*/


const accountId = 11  // const
let accountEmail = "gmail.com"  // let
var accountPass = "1234"  // var
accountCity = "Dinajpur"  // without declaring var, let, const

let accountState;  // without assigning value


accountEmail = "newMail.com"
accountPass = "2323"
accountCity = "Dhaka"

console.table([accountId, accountCity, accountPass, accountEmail, accountState])

console.log(accountState);  // undefined
// -- undefined - If you only declared any variable without putting the value then the value will be undefined


/*
# Always use const if the value should not be changed
# Always use const if the type should not be changed (Arrays and Objects)
# Only use let if you can't use const
*/