class User {
    constructor(username){
        this.username = username
    }
     logMe(){
    console.log(`USERNAME is : ${this.username}`);
   }
   static createID()
   {
    return `123`
   }
}
const wahab = new User("Abdulwahab")

// console.log(wahab.createID());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
       
    }
}

const iphone = new Teacher("Rana","RANA@GMAIL.COM")
iphone.logMe()
// console.log(iphone.createID());


