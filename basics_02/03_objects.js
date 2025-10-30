// Singleton
// Object.create
// **********************************************************************************************
// Object literals

const mysym = Symbol("key1")
const Jsuser = {
    name : "AbdulWahab",
    "fullname" : "Usman",
    [mysym] : " first-key1",
    age : 22,
    location : "Sialkot",
    email : "AbdulWahab@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"]
}
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
//  console.log(Jsuser["fullname"]);
//  console.log(Jsuser[mysym]);

 Jsuser.email = " Usman@email.com"
//  Object.freeze(Jsuser)
 Jsuser.email = " Rana@email.com"


//  console.log(Jsuser);


//  ************************************   Functions  ****************************************************

Jsuser.greeting = function()
{
    console.log(" Hello Rana ");
}

Jsuser.greetingtwo = function()
{
    console.log(` Hi Rana  , ${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingtwo());
