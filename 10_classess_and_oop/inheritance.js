class User {
   constructor(username){
    this.username = username
   }
   logMe(){
    console.log(`USERNAME is : ${this.username}`);
    
   }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`A new Course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("Abdulwahab","Rana@gmail.com","123")
// chai.addCourses()
chai.logMe()
const chaiTWO = new User("wahab")
chaiTWO.logMe()
