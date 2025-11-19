class User{
    constructor(email,password){
        this.email = email
         this.password = password
    }
     get email(){
    return this._email.toUpperCase()
    }
    get password(){
    // return this._password.toUpperCase()
    return `${this._password}rana`
    }
    set password(value){
    // this._password = value.toUpperCase()
      this._password = value
    }
    set email(value){
    // this._email = value.toUpperCase()
      this._email = value
    }
}
const Rana = new User("Rana@gmail.com","abc")
console.log(Rana.password);
console.log(Rana.email);
