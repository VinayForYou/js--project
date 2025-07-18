const tinderUser1 = new Object(); // "singleton" way to create an object

const tinderUser = {} // "object literal" way to create an object

tinderUser.name = "Vinay";
tinderUser.id = "12345";   
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser = {
    gmail: "vinay@gmail.com",
    id: "12345",
    userfullname : {
        firstName: "Vinay",
        lastName: "Choudhary"

    }  
}
// console.log(regularUser.userfullname?.firstName); // Accessing nested object property

const obj1 = {1: "a", 2: "b", 3: "c"};
const obj2 = {4: "d", 5: "e", 6: "f"};
const obj4 = {1: "a", 2: "b", 3: "c"};

const obj7 = {...obj1, ...obj2}; // Merging two objects using spread operator
// console.log(obj3); // {1: "a", 2: "b",

const obj3 = Object.assign({}, obj1, obj2, obj4); // Merging multiple objects using Object.assign
// console.log(obj3)


const user = [
    {
        name: "Vinay",
        age: 22,
        email: "collage@gmail.com",
    },
      {
        name: "Vinay",
        age: 22,
        email: "collage@gmail.com",
    },
]

// user[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser)); // Returns an array of values from the object
console.log(Object.entries(tinderUser)); // Returns an array of key-value pairs from the object

console.log(Object.hasOwnProperty(tinderUser, "name")); // Checks if the object has a property "name", returns true

//***********De-structuring**************/

const course = {
    coursename: "JavaScript",
    price: 999,
    courseInstructor : "Vinay Choudhary",
}
//  course.courseInstructor

const {courseInstructor} = course
// console.log(courseInstructor); // "Vinay Choudhary"

const{courseInstructor : Instructor} = course;
console.log(Instructor); // "Vinay Choudhary"