// ES6(year 6)
class User {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
     changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const Rana = new User("Abdulwahab","Rana@gmail.com","123")
console.log(Rana.encryptPassword());
console.log(Rana.changeUsername());


// **********************
// ***Behind the Scene***
// **********************
function User(username,email,password){
        this.username = username
        this.email = email
        this.password = password
}
User.prototype.encryptPassword = function(){
     return `${this.password}abc`
}
User.prototype.changeUsername = function(){
     return `${this.username.toUpperCase()}`
}
const Rajpoot = new User("Rana","Wahab@gmail.com","789")
console.log(Rajpoot.encryptPassword());
console.log(Rajpoot.changeUsername());


