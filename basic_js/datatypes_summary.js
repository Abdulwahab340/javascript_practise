
// ******Primitive*******

// 7 types of primitive datatypes 1.String, 2.Number, 3.Boolean, 4.Null, 5.Undefined, 6.Symbol, 7.BigInt

const score = 100
const scorevalue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherid = Symbol('123')
// console.log(id===anotherid);

 const bigNumber = 362532764276826328764238763782n

 
// ******Non-Primitive / Reference Type********

// 1.Arrays , 2.Objects , 3.Functions
const heros = ["Rana","Abdulwahab","Rajpoot"];  
let myObj = {
name:"Wahab",
age: 22,
}
const myFunction = function(){
    console.log("Hello World");
}
// console.log(typeof scorevalue );


// ****************************************************************************************************************************************************************************************************************************Memory**************************************************************************
// there are 2 types of memory     1.Stack(use hoti a primitive ma jitna b types tha   un ma)                                2.Heap(use hoti a non-premitive ma jitna b types tha un ma)



// 1. Stack::::::
let myName = "Wahab"
let anotherName = myName
anotherName = "Rana"
console.log(anotherName);
console.log(myName);

// 2. Heap ::::

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl",
}
let userTwo = userOne
userTwo.email = " Rana@gmail.com"
console.log(userOne);
console.log(userTwo);


