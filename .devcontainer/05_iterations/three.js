// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];
for (const value of arr) {
    //console.log(`value is ${value}`);
}

const greeting = "HelloWorld";
for( const greet of greeting){
    //console.log(`for each character is ${greet}`);
}

// map : key value pair, that holds unique keys

const map = new Map();

map.set("Fr", "France");
map.set("In", "India");
map.set("Us", "United States");

for (const [key, value] of map){
    console.log(key, ":-",  value);
}
