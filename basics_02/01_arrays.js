// ******************Arrays***************************

const myArr = [0 , 1 , 2 , 3 , 4 , 5]
const myArr2 = ["Rana" , "AbdulWahab"]
const myArr3 = (1 , 2 , 3 , 4)
// console.log(myArr[1]);

// *****************Methods of Arrays*****************

// Method No # 1 : (push => Array ma values ko add krna k lya  & pop=> Array ke last value ko remove krna k lya use hota ha & unshift=> Array ke starting ma value ko add krna k lya use hota ha & shift=> ma array ka pehla element remove ho jata ha)
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// myArr.push(6)
// myArr.push(7)

// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

//  console.log(myArr.includes(9));
//  console.log(myArr.indexOf(3));


//  join => convert Array into String form

// const newArray = myArr.join()
// console.log( newArray);
// console.log(myArr);
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::Slice and Splice:::::::::::::::::

//  1. Slice::
console.log(" A" , myArr);
const newn1 = myArr.slice(1, 3);   // is ma 1,2 element ko slice krta a aur 3 element ko nhi
console.log(newn1);
console.log(" B" , myArr);

//  2. Splice::
const newn2 = myArr.splice(1, 3);   //
console.log(" C" , myArr); 
console.log(newn2);








