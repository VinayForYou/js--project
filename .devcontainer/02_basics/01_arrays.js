//array

const myArray = [1, 2, 3, 4, 5];

const myHeroes = ["Thor", "Ironman", "Hulk", "Spiderman", "Captain America"];

const myArray2 = new Array(1, 2, 3, 4, 5);
// console.log(myArray[1]);

// //Array methods

// myArray.push(6); // Adds 6 to the end of the array
// console.log(myArray); // [1, 2, 3, 4,

// myArray.unshift(9); // Adds 9 to the beginning of the array
// myArray.shift(); // Removes the first element (1) from the array
// console.log(myArray.includes(2)); // true, checks if 2 is in the array

// const newArr = myArray.join(); // Joins the array elements into a string
// console.log(myArray); // [9, 1, 2, 3, 4, 5, 6]

// slice and splice******************

console.log("A",myArray);

const myn1 = myArray.slice(1,3); // Returns a new array with elements from index 1 to 2 (3 is not included) 

console.log(myn1);
console.log("B",myArray);

const myn2 = myArray.splice(1,3); // Removes 3 elements starting from index 1 and returns them 
console.log(myn2); 
console.log("C",myArray); 

