var questions = [
    {
        question:"1. What is JavaScript?",
        answers: ["a)JavaScript is a scripting language used to make the website interactive", 
        "b) JavaScript is an assembly language used to make the website interactive", 
        "c) JavaScript is a compiled language used to make the website interactive", "d) None of the mentioned"],

    },

    {
        question:"1. What is JavaScript?",
        answers: ["a)JavaScript is a scripting language used to make the website interactive", 
        "b) JavaScript is an assembly language used to make the website interactive", 
        "c) JavaScript is a compiled language used to make the website interactive", "d) None of the mentioned"],

    },
    {
        question:"1. What is JavaScript?",
        answers: ["a)JavaScript is a scripting language used to make the website interactive", 
        "b) JavaScript is an assembly language used to make the website interactive", 
        "c) JavaScript is a compiled language used to make the website interactive", "d) None of the mentioned"],

    },
        {
        question:"1. What is JavaScript?",
        answers: ["a)JavaScript is a scripting language used to make the website interactive", 
        "b) JavaScript is an assembly language used to make the website interactive", 
        "c) JavaScript is a compiled language used to make the website interactive", "d) None of the mentioned"],

    },
    {
        question:"1. What is JavaScript?",
        answers: ["a)JavaScript is a scripting language used to make the website interactive", 
        "b) JavaScript is an assembly language used to make the website interactive", 
        "c) JavaScript is a compiled language used to make the website interactive", "d) None of the mentioned"],

    },
    {
        question:"1. What is JavaScript?",
        answers: ["a)JavaScript is a scripting language used to make the website interactive", 
        "b) JavaScript is an assembly language used to make the website interactive", 
        "c) JavaScript is a compiled language used to make the website interactive", "d) None of the mentioned"],

    },





];

// Define global variables
let score = 0;
let timeLeft = 60;
let timerInterval;


//code for timer linked to start button
var timer = document.querySelector("#time");
var startBtn = document.querySelector("#start");
let count = 30;


//timer button counts down
function startQuiz() {
  // Start the timer
  let timeLeft = 60; // Set the time limit for the quiz
  let countdownTimer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(countdownTimer);
      // Add code here to handle time up
      console.log('Time up!');
    } else {
      // Display the time left
      console.log(`Time left: ${timeLeft}`);
      timeLeft--;
    }
  }, 1000);


  function startQuiz() {
  // start the timer
  const timer = setInterval(function() {
    timeLeft--;
    // update the time left on the page
    const timerDisplay = document.getElementById('timer');
    timerDisplay.textContent = `Time left: ${timeLeft} seconds`;

    if (timeLeft === 0) {
      clearInterval(timer);
      endQuiz(); // call function to end the quiz when time is up
    }
  }, 1000); // update time every 1 second

  // present the first question
  const questionContainer = document.getElementById('question-container');
  showQuestion(questionContainer, questions[currentQuestionIndex]);
}


function showQuestion(container, question) {
  // display the question on the page
  const questionText = container.querySelector('.question');
  questionText.textContent = question.questionText;

  // display the choices on the page
  const choiceList = container.querySelector('.choices');
  choiceList.innerHTML = '';
  question.choices.forEach(function(choice, index) {
    const li = document.createElement('li');
    li.classList.add('choice');
    li.textContent = choice;
    li.setAttribute('data-index', index);
    choiceList.appendChild(li);
  });

  // add event listener to check the answer when user clicks on a choice
  const choices = container.querySelectorAll('.choice');
  choices.forEach(function(choice) {
    choice.addEventListener('click', function() {
      checkAnswer(choice, question);
    });
  });
}


startBtn.addEventListener("click", startQuiz) {
    count--;
    time.textContent = count;
    if (count === 0) {
        clearInterval(interval);
    }

}


// Function to store high scores

function storeHighScores(score) {
  // Get existing high scores from local storage, or initialize empty array
  let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Add new score to high scores array
  highScores.push(score);

  // Sort high scores in descending order
  highScores.sort((a, b) => b - a);

  // Truncate high scores to top 10 scores
  highScores = highScores.slice(0, 10);

  // Store updated high scores in local storage
  localStorage.setItem("highScores", JSON.stringify(highScores));
}