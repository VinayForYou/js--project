function sayMyName(name) {
  console.log(`My name is ${name}`);
}
// 

// function addTwoNumbers(number1, number2) {
//   console.log( number1 + number2);
// }
// addTwoNumbers(5, 10); // Outputs: 15
// addTwoNumbers(5 , null);


function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
   return result;

}
const result = addTwoNumbers(5, 10);
// console.log("result:", result);


function loginUserMessage(username = "sam"){
    if(!username) {
        console.log("Please provide a username");
        return 
    }

    return `User logged in with username: ${username}`;
}

// console.log(loginUserMessage()); // Outputs: User logged in with username: sam
// console.log(loginUserMessage("vinay")); // Outputs: User logged in with username: vinay

function calculateCartPrice(...num1){
    return num1

}
// console.log(calculateCartPrice(100, 200, 400)); // Outputs: [100, 200, 400]

// ******************IMPortant**********************
function calculateCartPrice2(val1, val2,...num1){
    return num1

}
console.log(calculateCartPrice2(100, 200, 400)); // Outputs: [400]

const user = {
    username: "Vinay",
    age: 22,

}

function HandleUserDetails(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
}
// HandleUserDetails(user)// Outputs: username is Vinay and age is 22


// anoyher way to handle user details : 

HandleUserDetails({
    username: "Vinay",
    age: 22,

})

// const myNewArray = [1, 2, 3, 4, 5];

// function returnSecondValue(getArray) {
//     return getArray[1]; // Returns the second value of the array 
       
// }
// // console.log(returnSecondValue(myNewArray)); // Outputs: 2
// console.log(returnSecondValue([10, 20, 30, 40])); // Outputs: 20


const myNewArray = [1, 2, 3, 4, 5];

function returnThirdValue(getArray){
    return getArray[2];
}

console.log(returnThirdValue(myNewArray)); 