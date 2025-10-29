const name = " Abdulwahab"
const repoCount =50
// console.log(name + repoCount + "  Value")
console.log( `My Name is ${name} And my Repo Count on Github is ${repoCount}`);

const gameName = new String ('Rajpoot')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
// Methode for Dividing into SubString


// Method # 1 ::(SubString)
const newString = gameName.substring(0,4)
console.log(newString);

// Method #2 ::(Slice) is ma Rajpoot ke jb counting start krni a tw last sa krni a 1 sa length wise aur shuru sa index wise start krni a aur last element include ni ho ga ::::
const anotherstring = gameName.slice(-6,4)
console.log(anotherstring);

// Method #3::(Trim)
const stringone = "    Usman    "
console.log(stringone);
console.log(stringone.trim());

// Method # 4::(Replace)
const url = "https://hitesh.com//hitest%20choudhry"
console.log(url.replace('%20','-'));
console.log(url.includes('rana'));

// Method # 5::(Split)
const splitName = new String ('Rajpoot-Rana-abc')
console.log(splitName.split('-'));

