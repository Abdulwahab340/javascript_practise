// var c = 300
// let a = 300
// if(true){
//     let a = 10
// const b = 20
// var c = 30
// console.log("Inner : ",a)
// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
// console.log(a);
// console.log(b);
// console.log(c);


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&       :::::::::::::::::::::::::::::::::::::::::::::: Nested Scope ::::::::::::::::::::::::::::::::::::::::
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// function one(){
//     const username = " Rana AbdulWahab"
//     function two(){
//         const website = "Youtube"
//         console.log(username);
//     }
//     // console.log(website);
//     two()
// }
// one()


if (true){
    const username = " Rajpoot "
    if(username === " Rajpoot "){
        const website = " Whatsapp"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++++++++++++++++++++   Interesting  Concept ++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5));
function addone(num){
    return num+1
}




const addtwo = function(num){
    return num+2
}
console.log(addtwo(5));
