const userEmail ="vinay"

if(userEmail){
    console.log("User Email is present")
}else{
    console.log("User Email is not present")
}

// falsy values in JS : 

// false, 0 ,-0, BigInt(0), "", null, undefined, NaN (not a number )

// truthy values in JS :

// "0", " ", [], {}, function(){}, true, -1, BigInt(1), Symbol("symbol")


// how to check Ampty erray in Abovecase:

// if (userEmail.length===0){
//     console.log("array is empty")
// }

// in objects:

if(Object.keys(userEmail).length === 0){
    console.log("object is empty")
}

// nullish coalescing operator (??) : null undefined

let val1;
// val = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 10

console.log(val1);

// Terninary Operator

const iceTreePrice = 100;
iceTreePrice < 80 ? console.log("Ice cream is affordable") : console.log("Ice cream is expensive");
 