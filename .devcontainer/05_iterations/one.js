// for

// for (let index = 0; index <= 10; index++){
//     const element =  index;
//     console.log(element);
// }


// for(let i = 1; i < 10; i++){
//     const element = i;
//     if(i===5){
//         console.log(`executed at ${i}`)
//     }
//     console.log( element);
// }


// for (let i = 1; i <= 10; i++){
//     // console.log(`values of i is${i}`)

//     for( let j = 1; j <= 10; j++){
//         // console.log(`values of j is ${j}`);
//         console.log( i, "+", j, "=", i*j) ;
//         }
//     }

let myArray =["apple", "banana", "cherry", "date", "elderberry"];
//console.log(myArray.length);
for (let i = 0; i< myArray.length; i++){
    const element = myArray[i];
  //  console.log(element);

}

for(let index = 0;index <=20; index++){
    console.log(index);
    if(index === 10){   
      //  console.log("Loop is breaking at index 10");
        break; 
    }
   // console.log("Loop is continuing");

}

for(let index = 0;index <=20; index++){
    //console.log(index);
    if(index === 10){   
        console.log(`Loop is continue at ${index}`);
        continue; 
    }
    console.log(`value of i is ${index}`);

}