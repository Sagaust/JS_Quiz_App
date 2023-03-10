var quizQuestions = [
{
question: "What is JavaScript?",
choices: [
"A type of coffee",
"A scripting language used to create interactive web pages",
"A new type of computer",
"A type of tree"
],
correctAnswerIndex: 1
},
{
question: "What is a variable?",
choices: [
"A type of insect",
"A container for storing data values",
"A type of fish",
"A musical instrument"
],
correctAnswerIndex: 1
},
{
question: "What is a function?",
choices: [
"A type of fruit",
"A reusable block of code that performs a specific task",
"A type of bird",
"A type of car"
],
correctAnswerIndex: 1
},
{
question: "What is an array?",
choices: [
"A type of pizza",
"A collection of data values",
"A type of flower",
"A type of building"
],
correctAnswerIndex: 1
},
{
question: "What is a loop?",
choices: [
"A type of dance",
"A structure used to repeat a block of code",
"A type of animal",
"A type of game"
],
correctAnswerIndex: 1
},
{
question: "What is an object?",
choices: [
"A type of machine",
"A collection of related data and/or functionality",
"A type of food",
"A type of book"
],
correctAnswerIndex: 1
},
{
question: "What is the DOM?",
choices: [
"A type of movie",
"The Document Object Model, which represents the content of a web page as objects",
"A type of sport",
"A type of building material"
],
correctAnswerIndex: 1
},
{
question: "What is a conditional statement?",
choices: [
"A type of tree",
"A statement that performs different actions depending on whether a condition is true or false",
"A type of tool",
"A type of dance"
],
correctAnswerIndex: 1
},
{
question: "What is the difference between '==' and '==='?",
choices: [
"'==' compares values, while '===' compares values and types",
"'===' compares values, while '==' compares values and types",
"There is no difference",
"Both '==' and '===' only compare types"
],
correctAnswerIndex: 0
},
{
question: "What is the difference between 'let' and 'var'?",
choices: [
"'let' is block scoped, while 'var' is function scoped",
"'var' is block scoped, while 'let' is function scoped",
"There is no difference",
"'let' can only be used for strings, while 'var' can be used for any data type"
],
correctAnswerIndex: 0
}
];

// Get elements from the page
const startButton = document.getElementById("start");
const timeIndicator = document.getElementById("time");
const questionContainer = document.getElementById("question-container");
const startScreen = document.getElementById('start-screen');
const questions = document.getElementById('questions');
const endScreen = document.getElementById('end-screen');
const submitBtn = document.getElementById('submit');
const warning = document.getElementByIdr('.timer');
const questionTitle = document.getElementById('question');
const choices = document.getElementById('choices');
const incorrectAns = document.getElementById('incorrect');
const correctAns = document.getElementById('correct');
const startGame = document.getElementById('startGame');
const warningMusic = document.getElementById('warningMusic');
const gameComplete = document.getElementById('gameComplete');
const initials = document.getElementById('initials');
const finalScore = document.getElementById('final-score');
const feedBack = document.getElementById('feedback');

// Define global variables
let intervalID = null;
let timeOutID = null;
let timeRemaining = 0;
let questionIndex = 0;
//object format for saving player score
let scoreSave = {
inital: '',
score: 0
}

//function to initialize the app
function init() {
  // Shuffle questions
  for (let i = quizQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questionArr[i], quizQuestions[j]] = [quizQuestions[j], quizQuestions[i]];
  }

  // Calculate total time
  const totalTime = quizQuestions.length * 10;

  // Display total time
  timeIndicator.textContent = totalTime;

  // Hide start screen and show questions
  startScreen.style.display = "none";
  questions.style.display = "block";

  // Reset audio
  [startGame, correctAns, incorrectAns, warningMusic, gameComplete].forEach(audio => {
    audio.currentTime = 0;
  });
}

//function to start the timer
function timer() {
  if (timeRemaining > 0) {
    timeRemaining--;
    timeIndicator.textContent = timeRemaining;
    
    if (timeRemaining > 8) {
      startGame.play();
    } else if (timeRemaining <= 8 && intervalID !== null) {
      startGame.pause();
      warningMusic.play();
      warning.classList.add('warning');
    }
    
    setTimeout(timer, 1000);
  } else {
    // if not end the game
    clearInterval(intervalID);
    intervalID = null;
    endGame();
  }
}

function checkAns(test) {
    let check = questionShuff[questionIndex].correct;
    const isCorrect = test == check.toString() ? true : false;
    if (isCorrect) {
        correctAns.play();
    } else {
        incorrectAns.play();
    }
    return isCorrect;
}
