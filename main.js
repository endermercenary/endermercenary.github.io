
let min = 0;
let max = 100;

let ans;
let counter;

let gameOver = false;

const btnGuess = document.querySelector("#btnGuess");
const btnRestart = document.querySelector("#btnRestart");

const guessField = document.querySelector("#guessField");

const smallerlbl = document.querySelector("#smaller");
const biggerlbl = document.querySelector("#bigger");

const commentsBox = document.querySelector("#commentsBox");

btnGuess.addEventListener("click",GuessFn);
btnRestart.addEventListener("click",RestartGame);

RestartGame();

function RestartGame(){

    ans = Math.floor(Math.random()*(max-min+1))+min;

    console.log(ans);

    counter = 0;

    gameOver = false;

    smallerlbl.innerHTML = min;

    biggerlbl.innerHTML = max;

    guessField.value = "";

    commentsBox.innerHTML = "New game started!";

}

function GuessFn(){

    if(gameOver){

        commentsBox.innerHTML =
        "Press Restart to play again.";

        return;

    }

    let currGuess = parseInt(guessField.value);

    if(isNaN(currGuess)){

        commentsBox.innerHTML =
        "Please enter a number.";

        return;

    }

    counter++;

    if(currGuess==ans){

        commentsBox.innerHTML =
        `🎉 Correct! The answer is ${ans}. Attempts: ${counter}`;

        gameOver = true;

        return;

    }

    if(currGuess>ans){

        biggerlbl.innerHTML = currGuess;

        commentsBox.innerHTML =
        `Too big! Attempts: ${counter}`;

    }

    if(currGuess<ans){

        smallerlbl.innerHTML = currGuess;

        commentsBox.innerHTML =
        `Too small! Attempts: ${counter}`;

    }

    guessField.value = "";

}