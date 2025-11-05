// IF Statement
const IsUserLoggedIn = true
const temperature = 41
// if(temperature < 50)
// {
//     console.log(" Temperature is Good because it is less then 50 ");
// }
// else{
// console.log(" Invaled because  then 50 ");
// }


// if(2 === "2"){
//     console.log("Executed");
// }


// ::::::::::::::::::::::::::::::  scope  ::::::::::::::::::::::::::::::::::::::

// const score = 200
// if(score>100)
// {
//     const power = "Fly"
//     console.log(`User Power : ${power}`);
// }
//  console.log(`User Power : ${power}`);    // Is k error aya ga becoz power scope k ander define h bahr ni wo execute ho skti kue k us k scope e utna a {} braces ka ander tak ka:::


//:::::::::::::::::::::::::: Short Hand Notation:::::::::::::::::::::::::::::::
// const balance = 1000
// if(balance > 100) console.log("tested") , console.log("test 2");  //  IS tra sa ni likhna h kabi b

// if ( balance < 500){
//     console.log("balance is less then 500");
// }
// else if ( balance < 750)
// {
//       console.log("balance is less then 500");
// }
// else if ( balance < 900)
// {
//       console.log("balance is less then 900");
// }
// else
// {
//     console.log("::Program is Executed beacause balance is less then 1200::");
    
// }

const userloggedin = true
const debitcard = true
const loginGoogle = false
const loginEmail = true
if(userloggedin&&debitcard)
{
    console.log(" Allow to buy cources");
}
if ( loginGoogle || loginEmail)
{
    console.log(" User Logged In");
    
}




