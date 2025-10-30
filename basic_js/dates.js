// ************  Date ************
//  let myDate = new Date()
//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toLocaleString());
//  console.log(typeof myDate);


// ********************************************************************************************************************************************************************************************************                              ::::::: Dates Format:::::

//  let myCreatedDate = new Date(2003,0,3)
// console.log(myCreatedDate.toDateString());


//  let myCreatedDate = new Date(2003,0,3,5,3)
//  console.log(myCreatedDate.toLocaleString());

//  let myCreatedDate = new Date("2026-05-2")
//  console.log(myCreatedDate.toLocaleString());

//  let myCreatedDate = new Date("01-10-2026")
//  console.log(myCreatedDate.toLocaleString());

 let myCreatedDate = new Date("01-10-2026")
 let myTimeStamp = Date.now()
//  console.log(myTimeStamp);
//  console.log(myCreatedDate.getTime());

// Compare these vlaues  into seconds phla ya miliseconds ma aae thi lkin hm isa seconds sa compare kr rha ha ya interview k lya zaroori ha::::::

// console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday:"long"

})




