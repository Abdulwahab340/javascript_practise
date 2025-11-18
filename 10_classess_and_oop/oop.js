const user = {
    username : "Abdulwahab",
    loginCount : 8,
    singedIn : true,

    getUserDetail:function(){
        // console.log("Got Users Details From Database");
        // console.log(`Username ${this.username}`);
        console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetail());

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}
const userOne = new User("Abdulwahab",12,true)
const userTwo = new User("Rajpoot",11,false)
console.log(userOne.constructor);
// console.log(userTwo);




