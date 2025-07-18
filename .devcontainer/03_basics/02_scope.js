// var c = 300
let a = 400

{let a = 10
const b = 20
// var c = 30
// console.log("inner a :",a)
}

// console.log(a)
// console.log(b)
// console.log(c) // Outputs: 30

//*************NestedScope****************** */

function one(){
    const username = "Vinay";
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    // two();
}
// one()

if(true){
    const username = "vinay";
    if(username==="vinay"){
        const website = " youtube"
        console.log(username + website);

    }
    // console.log(username); // errors

}
// console.log(website); //errors

// ********** instersting****************** */

console.log(addOne(5)) // isme nahi ayega error

function addOne(num){
    return num + 1

}
// addOne(5)


console.log(addTwo(5)) // isme phele declare karne se error ayega
const addTwo = function(num){
    return num + 2

}
// addTwo(5)