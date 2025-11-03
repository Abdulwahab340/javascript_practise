// const tinderuser = new Object()
const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name = "Abdulwahab"
tinderuser.isLoggrdIn = false

// console.log(tinderuser);

const regularuser = {
    email : "Wahab@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Rana",
            lastname:"Abdulwahab",
        }

    }
}
// console.log(regularuser.fullname.userfullname.firstname);


const obj1 = { 1:"a" , 2:"b"}
const obj2 = { 3:"c" , 4:"d"}
const obj4 = { 5:"e" , 6:"f"}
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3);



// ******************De-Structuring Of Objects****************
const course = {
    coursename : " javascript",
    courseprice : "999",
    courseInstructor : " Hitesh ",

}
// course.courseInstructor
const {courseInstructor:Instructor} = course
// console.log(courseInstructor);
console.log(Instructor);


// {
//     "name" : " Abdulwahab",
//     "coursename" : "javascript",
//     "price" : "free",
// }

