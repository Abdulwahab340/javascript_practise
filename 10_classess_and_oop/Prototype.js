// let myName = "Abdulwahab       "
// let myChannel = "chai          "
// console.log(myName.truelength);


let myHeros = ["thor","spiderman"]
let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy Power is ${this.spiderman}`);
        
    }
}
Object.prototype.Rana = function(){
    console.log(`Rana is present in all Objects`);
}
Array.prototype.heyRana = function(){
    console.log(`Rana says Hello`);
}
// heroPower.Rana()
// myHeros.Rana()
// myHeros.heyRana()
// heroPower.heyRana()



// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// ************************ Inheritance*************************
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
const User = {
    name : "Abdulwahab",
    email : "Abdulwahab@gmail.com",
}
const Teacher = {
    makeVideo : true
}
const TeachingSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssingment : 'Js Assingment',
    fullTime : true,
    __proto__ : TeachingSupport
}
Teacher.__proto__ = User

// ******Modren Syntax*******
// **************************
Object.setPrototypeOf(TeachingSupport,Teacher)

// ******************************************


let anotherUsername = "Rana AbdulWahab            "
String.prototype.truelength = function(){
    console.log(`${this}`);
    
       console.log(`True Length is ${this.trim().length}`);
}
anotherUsername.truelength()
"Abdulwahab".truelength()
"Rajpoot".truelength()


