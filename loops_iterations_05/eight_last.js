const myNums = [1 , 2 , 3]
// const mySums = myNums.reduce(function(accumolator,currentvalue){
//     console.log(`accumolator is ${accumolator} and current value is ${currentvalue}`);
    
//     return accumolator+currentvalue
// },0)

const myTotal = myNums.reduce( (acc,curr) => acc+curr,0)
console.log(myTotal);


const ShopingCart = [
    {
        itemName : "js course",
        price : 2999
    },
     {
        itemName : "python course",
        price : 999
    },
     {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName : "data science course",
        price : 12999
    },
]
const pricetopay = ShopingCart.reduce((acc  , item)=>acc + item.price,0)
console.log(pricetopay);
