// Filter : 

// const coding = ["js", "py", "cpp", "swift"];

// const values = coding.forEach( (items) => {
//     console.log(items);
//     return items;
// })
// console.log(values); // undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// onst newNums = myNums.filter((nums) => nums > 5)
// console.log(newNums)

// const newNums = [];
// myNums.forEach ((num) => {
//     if (num > 5) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {title : "Book One", genre: "history ", publish : 1990, edition : 2010},
    {title : "Book Two", genre :"biology", publish : 1883, edition : 1999},
    {title : "Book three", genre: "history ", publish : 1990, edition : 2010},
    {title : "Book four", genre :"biology", publish : 1883, edition : 1999},
    {title : "Book five", genre: "history ", publish : 1990, edition : 2010},
    {title : "Book six", genre :"biology", publish : 1883, edition : 1999},
    {title : "Book seven", genre: "history ", publish : 1990, edition : 2010},
    {title : "Book eight", genre :"biology", publish : 1883, edition : 1999},

];
// const newBooks = books.filter( (bk) => bk.genre === "history")
const newBooks = books.filter( (bk) => bk.publish === 1990)

console.log(newBooks)