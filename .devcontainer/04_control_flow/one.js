// if
const isUserLoggedIn = true;
const temperature = 41;
if(temperature ===50){
    console.log("less than 50");
} else { 
    console.log("temperature is gereater than 50");

}
console.log("executed")
// <, >, <=, >=, ==, ===, !=, !==

// const score = 100;
// if(score >100){
//     let power = "fly"
//     console.log(`user power is${power}`);
// }
// console.log(`user power is${power}`);


//++++++++++++ shortHandNotations ++++++++++++++++

const balance = 1000;

if(balance < 500){
    console.log("less than 500");
}else if(balance < 750){
    console.log("less than 750");
}else if(balance < 900){
    console.log("less than 900");
}else{
    // console.log("less than 1200");
}


const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromFacebook = true

if(UserLoggedIn && debitCard){
    console.log("user can buy the product");
}
if(loggedInFromFacebook || loggedInFromFacebook){
    console.log("user loggedIn")
}