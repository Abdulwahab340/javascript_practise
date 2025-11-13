let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
  

//  Eik paragraph create krna ha yaha
const p = document.createElement('p');

// Eik Array create krey ga::
let prevGuess = [];
let numGuess = 1;

// jab b ap koiii game banaya ga ya is tra ka variable define kr k lazmi usa use krey ga::
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    // ab is guess ko aga function ma push kia ha validateGuess ma:::
    validateGuess(guess);
    })
}



function validateGuess(guess){
    // 
    if(isNaN(guess)){
        alert('Please Enter a Valid Number ');
    }
     else if(guess < 1){
        alert('Please Enter the Number more then 1');
    }
     else if(guess > 100){
        alert('Please Enter the Number less then 100');
    }
    // Ab is ko aga push kr dena ha array ma jo uper define ha prevGuess=[] ka name sa aur us ko push asa krta ha
    prevGuess.push(guess);

    if(numGuess === 11){
        displayGuess(guess);
        displayMessage(`Game Over.Random Number wa ${randomNumber}`);
        endGame();
    }else{
        displayGuess(guess);
        // check krna k lya apka guess thek ha k ni ap usa next method ya function checkGuess ma bheg da ga
        checkGuess(guess);
    }
}



function checkGuess(guess){
    // 
    if(guess === randomNumber)
    {
        displayMessage(`You Guess it Right(Successfully)`);
        endGame();
    }
    else if(guess < randomNumber){
 displayMessage(`Number is tooooo Low`);
    }
      else if(guess > randomNumber){
 displayMessage(`Number is tooooo Greater or High`);
    }
}



function displayGuess(guess){
    // 
    userInput.value = '';
    guessSlot.innerHTML += `${guess},  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;

}



function displayMessage(message){
    // 
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    // 
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');

    p.innerHTML=`<h2 id = "newGame">Start New Game</h2>`;

    startOver.appendChild(p);
    playGame = false;
    newGame();
}



function newGame(){
    // 
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
randomNumber = parseInt(Math.random()*100+1);
prevGuess=[];
numGuess = 1;
guessSlot.innerHTML='';
  remaining.innerHTML = `${11 - numGuess}`;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);


  playGame = true;

    })
}



