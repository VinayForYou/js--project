//primitive  (call by refrenece)

//7 data types
// 1. Number        
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

const score = 100; // Number
const scorevalue = 100.5; // Number

const isloggedIn = true; // Boolean
const isloggedOut = false; // Boolean
let userEmail; // Undefined

const id = Symbol("id"); // Symbol
const anotherId = Symbol("id"); // Symbol

console.log(id === anotherId); // false, symbols are unique

const bigNumber = 123445678901234567890n; // BigInt
// BigInt is used for very large integers, denoted by 'n' at the end



//non primitive
// 1. Object
// 2. Array
// 3. Function

const heros = ["Thor", "Ironman", "Hulk"]; // Array
const myObj = {
  name: "John",
  age: 30,
  isActive: true
}; // Object

function myFunction() { // Function
  console.log("Hello, World!");

}


//****************************** */

// stack (primtive)(copy milegi data ki) ,  heap (non primitve)(reference milega data ka)

let myYoutubeChannel = "VinayForYou"
let myANotherYoutubeChannel = myYoutubeChannel;

console.log(myYoutubeChannel, myANotherYoutubeChannel); // VinayForYou VinayForYou


let user = {
    name: "Vinay",
    age: 30,
}

let user2 = user;   
console.log(user, user2); // { name: 'Vinay', age: 30 } { name: 'Vinay', age: 30 }




