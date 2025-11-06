 
//:::::::::::::::::::  for in loop for Objects   :::::::::::::::::::::::::
 
  const myobj = {
    js:'Javascript',
    cpp:'C++',
    ruby:"Ruby",
    swift:"Swift by Apple"
}
for (const key in myobj) {
// console.log(`${key} Shortcut for ${myobj[key]}`);

    }
//:::::::::::::::::::  for in loop for Arrays   :::::::::::::::::::::::::   
const programming = ["js" , "rb" , "py" , "java" , "cpp"] 
for (const key in programming) {
    console.log(programming[key]);
    
}