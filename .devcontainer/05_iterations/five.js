const coding = ["js", "py", "cpp", "swift"];

// coding.forEach(function (items){
//     console.log(items);
// })


// const coding = ["js", "py", "cpp", "swift"];

// coding.forEach( (items) => {
//     console.log(items);
// })

function printItems(item) {
    console.log(item);
}
// coding.forEach(printItems);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });

const myCoding = [
    { 
        languageName: "JavaScript",
        languageFileName : "js",
    },
    { 
        languageName: "java",
        languageFileName : "java",
    },
    { 
        languageName: "python",
        languageFileName : "py",
    }
];
myCoding.forEach((items) => {
    // console.log(items.languageName, items.languageFileName);
    console.log(items.languageName)
})


//practice
const newObject = {
    js : "javascript",
    py : "python",
    cpp : "c++",

}
Object.keys(newObject).forEach((key) => {
    console.log(key, ":-", newObject[key])
})




