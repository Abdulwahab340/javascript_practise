
// :::::::: for loop ::::::::::

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
//  console.log("5 is the best Number ");
  }
//   console.log(element);
}


// :: Another loop ::

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop Value :  ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop Value : ${j} and  Inner Loop Value ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
    }
}

// ::Another loop ::
  

let myArray = ["Flash","Batman","Superman"]
// console.log(myArray.length);


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// ****** break and continue ******
// for (let index = 1; index <=20; index++) {
//     if(index==5){
//         console.log("Detected 5");
//         break
        
//     }
//     console.log(`Value of i is ${index}`);
    
// }
// ::::::::::::::::::::  Duplicate ::::::::::::::::::::

for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log("Detected 5");
        continue
        
    }
    console.log(`Value of i is ${index}`);
    
}