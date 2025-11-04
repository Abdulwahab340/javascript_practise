const user = {
    username : "Rana Abdulwahab",
    price : 999,
    welcomeMessage:function(){
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = " Rajpoot "
// user.welcomeMessage()
// console.log(this);


// function chai(){
//     let username = "A.Wahab"  
//     console.log(this.username);
// }
// chai()


// const chai = function(){
//      let username = "A.Wahab"  
//    console.log(this.username);
// }
// chai()



const chai = () => {
     let username = "A.Wahab"  
//    console.log(this);
}
chai()


// **********************************************************************************************************************************************::::::::::::::::::: ArrowFunction:::::::::::::::::::::************************************
// First explicit return
// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// Second  implicit return
// const addTwo = (num1,num2) =>  num1+num2

// const addTwo = (num1,num2) =>  (num1+num2)             

// :::: If you want to return Object::::::
const addTwo = (num1,num2) =>  ({username:"Abdulwahab"})         

console.log(addTwo(3, 4))

// const myArray = [ 2 , 5 , 3 , 7 , 8]
// myArray.forEach()
