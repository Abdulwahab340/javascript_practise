function SetUsername(username) {
    // Complex DB calls
    this.username = username
}
function CreateUser(username,email,password){
     SetUsername.call(this,username)
    this.email = email
    this.password = password
}
const Rana = new CreateUser("Abdulwahab","Abdulwahab@gmail.com","123")
console.log(Rana);
