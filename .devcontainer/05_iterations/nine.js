//Array reduce :

const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`)
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc , currval) => acc + currval,0)
// console.log(myTotal)

const shoppingCart = [
    {
        itemName : "py cource",
        price : 999,
    },

    {
        itemName : "mobile dev cource",
        price : 4999,
    },

    {
        itemName: "data science cource",
        price : 5999,
    },
]

const totalBill = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(totalBill)