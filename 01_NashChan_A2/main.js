// Pages


// ===== Navigation =====

// Get all the pages in the website
const pages = document.querySelectorAll(".page");
// Get every navigation button
const navBtns = document.querySelectorAll(".navBtn");
// Get the cards on the home page
const homeCards = document.querySelectorAll(".homeCard");

// Get the audio elements
const clickSound = document.querySelector("#clickSound");
const correctSound = document.querySelector("#correctSound");
const winSound = document.querySelector("#winSound");
// Menu

const hamBtn = document.querySelector("#hamBtn");
// Get the navigation menu
const menu = document.querySelector("#menu");

// Home

// Get the Start Exploring button
const startBtn = document.querySelector("#startBtn");
// Get the area where brain facts are displayed
const factText = document.querySelector("#factText");

// Facts
// Store the facts that will rotate on the home page
const facts = [

    "Your brain contains around 86 billion neurons.",

    "The brain uses about 20% of your body's energy.",

    "Your brain is about 60% fat.",

    "The cerebellum contains over half of your brain's neurons.",

    "Your brain never stops working, even while you sleep."

];
// Keep track of the current fact being shown
let factIndex = 0;

// Change page

// Display the selected page and hide the rest
function showPage(pageId){

	// Remove the active class from every page
    for(let i = 0; i < pages.length; i++){

        pages[i].classList.remove("active");

    }
	// Show the page that matches the pageId
    document.querySelector("#" + pageId).classList.add("active");

}

// Navigation buttons
// Add a click event to every navigation button
for(let i = 0; i < navBtns.length; i++){

    navBtns[i].addEventListener("click", function(){
		clickSound.currentTime = 0;
		clickSound.play();

        showPage(this.dataset.page);

        if(window.innerWidth <= 800){

            menu.classList.remove("show");

        }

    });

}

// Home cards
// Add a click event to every home card
for(let i = 0; i < homeCards.length; i++){

    homeCards[i].addEventListener("click", function(){
		clickSound.currentTime = 0;
		clickSound.play();
        showPage(this.dataset.page);

    });

}

// Start button
// Open the Brain Anatomy page when the button is clicked
startBtn.addEventListener("click", function(){
	clickSound.currentTime = 0;
    clickSound.play();
    showPage("anatomy");

});

// Hamburger
// Open or close the navigation menu
hamBtn.addEventListener("click", function(){

    menu.classList.toggle("show");

});
// Change fact
// Show the next fact in the list
function nextFact(){

    factIndex++;

    if(factIndex >= facts.length){

        factIndex = 0;

    }

    factText.textContent = facts[factIndex];

}

setInterval(nextFact,5000);
// Brain anatomy

const brainBtns = document.querySelectorAll(".brainBtn");

const brainTitle = document.querySelector("#brainTitle");
const brainText = document.querySelector("#brainText");
const brainList = document.querySelector("#brainList");
const brainFactBox = document.querySelector("#brainFactBox");
//creating objects for groups of data
const brainData = {

    frontal:{

        title:"Frontal Lobe",

        text:"The frontal lobe is responsible for thinking, planning and making decisions.",

        list:[
            "Planning",
            "Decision making",
            "Problem solving",
            "Voluntary movement"
        ],

        fact:"The frontal lobe is the last part of the brain to fully develop."

    },

    parietal:{

        title:"Parietal Lobe",

        text:"The parietal lobe processes information from your senses.",

        list:[
            "Touch",
            "Temperature",
            "Pain",
            "Body position"
        ],

        fact:"The parietal lobe helps you understand where different parts of your body are."

    },

    temporal:{

        title:"Temporal Lobe",

        text:"The temporal lobe helps you hear sounds and remember information.",

        list:[
            "Hearing",
            "Language",
            "Memory",
            "Recognising faces"
        ],

        fact:"The temporal lobe plays an important role in forming memories."

    },

    occipital:{

        title:"Occipital Lobe",

        text:"The occipital lobe processes everything you see.",

        list:[
            "Vision",
            "Colours",
            "Shapes",
            "Movement"
        ],

        fact:"Although your eyes detect light, your occipital lobe allows you to understand what you are seeing."
	
    },

    cerebellum:{

        title:"Cerebellum",

        text:"The cerebellum controls balance and helps your muscles move smoothly.",

        list:[
            "Balance",
            "Posture",
            "Coordination",
            "Fine movement"
        ],

        fact:"The cerebellum contains more than half of all the neurons in your brain."

    }

};

// Update information

function showBrainPart(part){

    brainTitle.textContent = brainData[part].title;

    brainText.textContent = brainData[part].text;

    brainFactBox.textContent = brainData[part].fact;

    brainList.innerHTML = "";

    for(let i = 0; i < brainData[part].list.length; i++){

        const item = document.createElement("li");

        item.textContent = brainData[part].list[i];

        brainList.appendChild(item);

    }

}

// Brain buttons
//Show information about the selected brain part
for(let i = 0; i < brainBtns.length; i++){

    brainBtns[i].addEventListener("click", function(){
		clickSound.currentTime = 0;
		clickSound.play();
        showBrainPart(this.dataset.part);

    });

}
// Brain activity
// Get the elements used in the signal animation
const signal = document.querySelector("#signal");
const signalBtn = document.querySelector("#signalBtn");
const signalText = document.querySelector("#signalText");
const neuronLine = document.querySelector(".neuronLine");

// Store the signal's position and timer
let signalPos = 0;
let signalMove;

// Send signal

signalBtn.addEventListener("click", startSignal);

function startSignal(){

    clearInterval(signalMove);

    signal.style.display = "block";

    signal.style.left = "0px";  //reset position of neuron

    signalText.textContent = "Signal travelling...";

    signalPos = 0;

    signalBtn.disabled = true;  //stop button from being spammed

    signalMove = setInterval(moveSignal, 15);

}

function moveSignal(){

    const maxPos = neuronLine.clientWidth - signal.offsetWidth;  // prevents neuron from exitting the box

    signalPos += 3;

    if(signalPos >= maxPos){

        signalPos = maxPos;

        clearInterval(signalMove);

        signalText.textContent =
        "Signal received! Neurons communicate using electrical impulses.";

        signalBtn.disabled = false;

    }

    signal.style.left = signalPos + "px";

}
// Quiz

const quizForm = document.querySelector("#quizForm");
const question = document.querySelector("#question");

const option0 = document.querySelector("#option0");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");

const feedback = document.querySelector("#quizFeedback");

const nextBtn = document.querySelector("#nextBtn");

const questionNo = document.querySelector("#questionNo");
const totalQuestions = document.querySelector("#totalQuestions");

const quizResult = document.querySelector("#quizResult");
const finalScore = document.querySelector("#finalScore");
const restartQuiz = document.querySelector("#restartQuiz");
let currentQuestion = 0;
let score = 0;
//storing questions as objects within an Array 
const quizData = [

    {

        question:"Which lobe controls vision?",

        options:[
            "Frontal Lobe",
            "Occipital Lobe",
            "Temporal Lobe",
            "Parietal Lobe"
        ],

        answer:1,

        explanation:"The occipital lobe processes visual information from your eyes."

    },

    {

        question:"Which part of the brain helps with balance?",

        options:[
            "Frontal Lobe",
            "Temporal Lobe",
            "Cerebellum",
            "Parietal Lobe"
        ],

        answer:2,

        explanation:"The cerebellum controls balance and coordination."

    },

    {

        question:"About how many neurons are in the human brain?",

        options:[
            "10 million",
            "500 million",
            "86 billion",
            "1 trillion"
        ],

        answer:2,

        explanation:"Scientists estimate the brain contains around 86 billion neurons."

    },

    {

        question:"Which lobe is important for hearing?",

        options:[
            "Temporal Lobe",
            "Occipital Lobe",
            "Frontal Lobe",
            "Cerebellum"
        ],

        answer:0,

        explanation:"The temporal lobe processes sounds and language."

    },

    {

        question:"Neurons communicate using...",

        options:[
            "Water",
            "Electrical impulses",
            "Air",
            "Bones"
        ],

        answer:1,

        explanation:"Neurons send electrical impulses to pass information around the body."

    }

];



function loadQuestion(){

    const q = quizData[currentQuestion];

    questionNo.textContent = currentQuestion + 1;

    totalQuestions.textContent = quizData.length;

    question.textContent = q.question;

    option0.textContent = q.options[0];
    option1.textContent = q.options[1];
    option2.textContent = q.options[2];
    option3.textContent = q.options[3];

    quizForm.reset(); // make it so no answer is selected when changing questions

    feedback.textContent = "Choose an answer and press Submit.";

    nextBtn.style.display = "none"; // hide next button till answered

}

quizForm.addEventListener("submit", function(event){

	// Stop the form from refreshing the page
    event.preventDefault();
	
	// Get the selected answer
    const selected =
    document.querySelector("input[name='answer']:checked");

	// Make sure an answer was selected
    if(selected == null){

        feedback.textContent = "Please choose an answer.";

        return; // get out of loop

    }
	// Convert the selected value into a number
    const answer = Number(selected.value);


	// Compare the user's answer with the correct answer
    if(answer == quizData[currentQuestion].answer){

    score++;

    correctSound.currentTime = 0;
    correctSound.play();

    feedback.textContent =
        "✔ Correct! " +
        quizData[currentQuestion].explanation;

}

    else{

        feedback.textContent =
        "✘ Incorrect. " +
        quizData[currentQuestion].explanation;

    }

    nextBtn.style.display = "inline-block";

});
// Move to the next question
nextBtn.addEventListener("click", function(){
	
	// Go to the next question
    currentQuestion++;

	// check if still have questions
    if(currentQuestion >= quizData.length){

        showResult();

    }

    else{

        loadQuestion();

    }

});
// Display the final quiz score

function showResult(){
	
	// Hide the quiz
    quizForm.style.display = "none";

    nextBtn.style.display = "none";
	
	//show result screen
    quizResult.style.display = "block";

    finalScore.textContent = score;

}
//reset quiz
restartQuiz.addEventListener("click", function(){

    currentQuestion = 0;

    score = 0;

    quizResult.style.display = "none";

    quizForm.style.display = "block";

    loadQuestion();

});

// Start quiz

loadQuestion();

// Memory game

//declare variables
const gameBoard = document.querySelector("#gameBoard");

const moveCount = document.querySelector("#moveCount");
const matchCount = document.querySelector("#matchCount");
const time = document.querySelector("#time");

const gameMessage = document.querySelector("#gameMessage");
const restartGame = document.querySelector("#restartGame");

const factMessage = document.querySelector("#factMessage");

// Array of cards
const brainCards = [

    "Frontal",
    "Frontal",

    "Parietal",
    "Parietal",

    "Temporal",
    "Temporal",

    "Occipital",
    "Occipital",

    "Cerebellum",
    "Cerebellum"

];

// object of properties of each brain part
//used for finding info
const brainFacts = {

    Frontal:
    "The frontal lobe controls planning and decision making.",

    Parietal:
    "The parietal lobe processes touch and body position.",

    Temporal:
    "The temporal lobe helps with hearing and memory.",

    Occipital:
    "The occipital lobe processes vision.",

    Cerebellum:
    "The cerebellum controls balance and coordination."

};
let matchedPairs = 0;
let firstCard = null; // store nothing since later first card will hold an element
let secondCard = null;

let lockBoard = false; //used to stop player from trying to match more than 2 cards at a time

let moves = 0;
let matches = 0;

let seconds = 0;

let timer; // used to store interval so time can be stopped after game is finished
let timerStarted = false; //used as a flag to stop timer from being started multiple times

//shuffling cards
function shuffle(array){
	
	//go through cards starting from the back of the Array to prevent cards moving more than once
    for(let i = array.length - 1; i > 0; i--){
		
		//pick random place
        const random =
        Math.floor(Math.random() * (i + 1)); //.floor() since .random() returns decimals sometimes || i+1 to account for all cards
		
		//swap the 2 values
        const temp = array[i];

        array[i] = array[random];

        array[random] = temp;

    }

}

function createBoard(){
	
	//clear previous cards
    gameBoard.innerHTML = "";
	
	// Randomise the card order
    shuffle(brainCards);

	// Create each card
    for(let i = 0; i < brainCards.length; i++){

        const card = document.createElement("div");

        card.className = "memoryCard";  //assign class for uniform asthetic

        card.dataset.value = brainCards[i]; //set what part of the brain belongs to this card

        card.textContent = "?";

        gameBoard.appendChild(card); //adds card to webpage

    }

}
// Click cards

gameBoard.addEventListener("click", function(event){

	// Find the element that was clicked
    const card = event.target;
	
	// Ignore clicks that are not on a card
    if(!card.classList.contains("memoryCard")){

        return;

    }
	
	// Ignore clicks while checking a pair
    if(lockBoard){

        return;

    }

	// Ignore clicking the same card twice
    if(card === firstCard){

        return;

    }

	// Ignore cards that have already been matched
    if(card.classList.contains("matched")){

        return;

    }
	
	// Start the timer when the first card is clicked
    if(!timerStarted){

        timerStarted = true;

        timer = setInterval(updateTimer,1000);

    }

    flipCard(card);

});
//check for match
function checkMatch(){

    if(firstCard.dataset.value === secondCard.dataset.value){
		correctSound.currentTime = 0;
		correctSound.play();
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");

        matches++;
        matchedPairs++;
 
        matchCount.textContent = matches;
		// Show a fact about the matched brain part
        factMessage.textContent =
        brainFacts[firstCard.dataset.value];
		
		// Prepare for the next turn
        resetCards();
		
		// Check if the player has won
        if(matchedPairs === 5){
			winSound.currentTime = 0;
			winSound.play();
            clearInterval(timer);

            gameMessage.textContent =
            "🎉 Congratulations! You matched every pair.";

        }

    }
	
	// Flip the cards back after a short delay
    else{

        setTimeout(function(){

            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");

            firstCard.textContent = "?";
            secondCard.textContent = "?";

            resetCards();

        },700);

    }

}

function flipCard(card){

	// Ignore cards that are already flipped
    if(card.classList.contains("flip")){

        return;

    }

	// Ignore cards that have already been matched
    if(card.classList.contains("matched")){

        return;

    }
	//show card
    card.classList.add("flip");
    card.textContent = card.dataset.value;

    if(firstCard == null){

        firstCard = card;
        return;

    }

    secondCard = card;

    moves++;
    moveCount.textContent = moves;

    lockBoard = true;

    checkMatch();

}
function resetCards(){

    firstCard = null;
    secondCard = null;

    lockBoard = false;

}
function updateTimer(){

    seconds++;

    time.textContent = seconds;

}

restartGame.addEventListener("click", restartMemoryGame);

function restartMemoryGame(){
	
    clearInterval(timer);

    timerStarted = false;

    seconds = 0;
    moves = 0;
    matches = 0;
	matchedPairs = 0;

    time.textContent = 0;
    moveCount.textContent = 0;
    matchCount.textContent = 0;

    firstCard = null;
    secondCard = null;
    lockBoard = false;

    factMessage.textContent =
    "Match a pair to learn something new!";

    gameMessage.textContent =
    "Click two cards to begin!";

    createBoard();

}

createBoard();