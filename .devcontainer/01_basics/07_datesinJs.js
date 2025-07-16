// dates is object in JavaScript

let date = new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString()); // "Mon Oct 16 2023"
// console.log(date.toTimeString()); // "10:30:00 GMT+0530 (India Standard Time)"

// let myDate = new Date(2025 , 6 , 16)
// console.log(myDate.toString()); // "Sat jul 16 2025 00:00:00 GMT+0530 (India Standard Time)"

let yDate = new Date(2025 , 6 , 16 , 10, 30, 0); // year, month (0-11), day, hours, minutes, seconds
// console.log(yDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(yDate.getTime());
console.log(Math.floor (Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1)

newDate.toLocaleString('default',{
    weekday: 'long', // "Monday"
    year: 'numeric', // "2025"
    month: 'long', // "July"
    day: 'numeric' // "16"
    
})