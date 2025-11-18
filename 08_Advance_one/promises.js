// ********************************************::::Task 1::::********************************************************************************
const promiseOne = new Promise(function(resolve,reject){
//::: Do an async task:::
//  Tasks like ::: DBcalls,cryptography,Network

setTimeout(function(){
    console.log('Async Task is Completed');
    resolve()
},1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

// **************************************************************::::Task 2::::********************************************************************
//******* * Promise # 2 :********
new Promise(function(resolve,reject){
setTimeout(function(){
    console.log("Async Task 2 is completed");
    resolve()
},1000)
}).then(function(){
console.log("Async Task 2 resolved");

})
// **********************************************************::::Task 3::::************************************************************************
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
resolve({username:"Abdulwahab",email:"Rana@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
console.log(user);
})
// **********************************************************::::Task 4::::************************************************************************
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Wahab",password:"123"})
        }else{
            reject('ERROR: Something Went Wrong')
        }
    },1000)
})
promiseFour.then((user)=>{
console.log(user);
return user.username
}).then((username)=>{
console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("promise is either resolved or rejected")
)

// **********************************************************::::Task 5::::************************************************************************
const promiseFive = new Promise(function(resolve,reject){
      setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Javascript",password:"123"})
        }else{
            reject('ERROR: Js Went Wrong')
        }
    },1000)
})
async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()



// ***************Try Catch Syntax Format************************
// ******************************************


// async function getAllUsers() {
//   try {
//      const response = await fetch('https://api.github.com/users/Abdulwahab340')
// // console.log(response);

//      const data =await response.json()
//      console.log(data);

//      } catch (error) {
//     console.log("E:",error);
    
//   }
// }
// getAllUsers()


// ***************.then and .catch format************************
// ******************************************

fetch('https://api.github.com/users/Abdulwahab340')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))