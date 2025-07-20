// Immediately Invoked Function Expression (IIFE)
//Global scope k poliuation se dikkat hoti hai kayi baar toh hum isse use krte hai

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

// arrow function :
((name)=>{
    //un-named IIFE
    console.log(`DB CONNECTED ${name}`)
})("vinay");


