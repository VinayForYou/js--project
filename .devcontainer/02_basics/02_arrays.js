const marvel_heros = ["thor", "ironman", "hulk", "black widow", "captain america"];
const dc_heros = ["superman", "batman","flash"];

marvel_heros.push(dc_heros);
// console.log(marvel_heroes); 
// console.log(marvel_heroes[5][2]);

// const allHeros = marvel_heros.concat(dc_heros); // Concatenates dc_heroes to marvel_heroes but does not modify the original array
// console.log(allHeros); // marvel_heroes remains unchanged


const allHeros = [...marvel_heros, ...dc_heros]; // Using spread operator to combine arrays
console.log(allHeros); // ["thor", "ironman", "hulk", "

const anotherArray = [1, 2, 3, [4, 5 , 6], 7, [4 , 5] , 8];

console.log(anotherArray.flat()); // Flattens the array by one level, resulting in [1, 2, 3, 4, 5, 6, 7, 4, 5, 8]


console.log(Array.isArray("Vinay")); // Checks if "Vinay" is an array, returns false
console.log(Array.from("Vinay")); // Converts string to an array of characters ['V', 'i', 'n', 'a', 'y']

//**** intersing**** */
console.log(Array.from({name: "Vinay", age: 25})); // Converts an object to an array of its values, returns ['Vinay', 25]

let scores1 = 100
let scores2 = 200;
let scores3 = 300;

console.log(Array.of(scores1, scores2, scores3)); // Creates an array from the given arguments, returns [100, 200, 300]