

function myNAme(){
    console.log("W")
console.log("A")
console.log("H")
console.log("A")
console.log("B")

}
// myNAme()

// function addtwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

function addtwoNumbers(number1,number2){
//    let result = number1+number2
//    return result
return number1+number2
}


 const result = addtwoNumbers(3,7)
//  console.log(" Result :" , result);

// ****************************************************************************************************************************************************************************************************************************************

function loginUserMessage(username = "RANA"){
    if(!username){
        console.log("Please Enter the Username")
        return
    }
    return`${username} just logged in `
}
// console.log(loginUserMessage("Abdulwahab"))
// console.log(loginUserMessage("WAHAB"))

function calculatecartprice(val1,val2,...num1){
    return num1
}
console.log(calculatecartprice(200,400,500,2000))

const user = {
    username: "Abdulwahab",
    price: 999
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user)

const mynewarray = [200,400,100,600]
function returnsecondvalue(getArray){
    return getArray[1]
}
console.log(returnsecondvalue(mynewarray));