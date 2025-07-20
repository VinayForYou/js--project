const user = {
    username : "vinay",
    price : 666,

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to Website`)
        console.log(this)
    }

}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this)


//++++++++++++++++this function isme kaam hi ni krta++++++++++++++++++++++++++++

// function chai(){
//     let username = "Vinay"
//     console.log(this.username)
// }

// chai()

//Another example: 

// const chai = function(){
//     let username = " vinay"
//     console.log(this)
// }
// chai()


const chai = () => {
    let username = " vinay"
    console.log(this);

}
// chai()

const  addTwo = (num1, num2) => {
    return num1 + num2

}
// console.log(addTwo(3,4))

 
// const addThree = (num1,num2,num3) => (num1 + num2 + num3)
const addThree = (num1,num2,num3) => ({username: "vinay"}) // wraping object in arrow function

console.log(addThree(4,5,6))
