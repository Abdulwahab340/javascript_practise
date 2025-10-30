const marvel_heros = ["Thor" , "Ironman" , "Spiderman"]
const dc_heros = ["Superman" , "Flash" , "Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

 const obj = marvel_heros.concat(dc_heros)
// console.log(obj);

// ::::::::::: USE SPREAD OPERATOR:::::::::::::

const newobj = [...marvel_heros , ...dc_heros]
// console.log(newobj);



const anotherarray = [1 , 2 , 3 , [4 ,5 ,6] , 7 , [6 , 7 , [ 4 , 5 ]]]
const secondarray = anotherarray.flat(Infinity)
// console.log(secondarray);
   

console.log(Array.isArray("AbdulWahab"));
console.log(Array.from("AbdulWahab"));

console.log(Array.from({name:"AbdulWahab"}));
 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3));
