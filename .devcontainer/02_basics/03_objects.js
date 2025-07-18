// singleton

// object ko decleare kane ko treke hai ek " singleton " or dusra "object literal"

// object literal : 

//*******************INTERVIEW IMP ***************************/
const mySym = Symbol("key1");
const JsUser = {
    name : "Vinay",
    "Full Name" : "Vinay Choudhary",
    age : "22",
    [mySym] : "mykey1", // important
    location : "India",
    email : "vinay@gmail.com",
    isloggedIn : false,
    lastloggedInDays : ["Monday", "Tuesday"],

} 
console.log(JsUser.email); 
console.log(JsUser["email"]); // Accessing property using bracket notation
console.log(JsUser["Full Name"]);
console.log(JsUser[mySym]);


JsUser.email = "Vinayop@gmail.com"
//Object.freeze(JsUser); // Freezes the object, preventing any modifications

//console.log(JsUser.email);


JsUser.greeting = function() {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo()); 