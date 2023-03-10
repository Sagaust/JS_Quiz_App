var questions = [
  {
    question: "What is the correct syntax for creating a new JavaScript variable?",
    choices: {
      a: "var = exampleVariable;",
      b: "variable exampleVariable = new var;",
      c: "var exampleVariable = '';",
      d: "variable.exampleVariable = '';"
    },
    correctAnswer: "c"
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    choices: {
      a: "string",
      b: "boolean",
      c: "integer",
      d: "object"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the output of the following code?\n\nconsole.log('5' + 5);",
    choices: {
      a: "55",
      b: "10",
      c: "undefined",
      d: "NaN"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the output of the following code?\n\nvar x = 10;\nconsole.log(x == '10');",
    choices: {
      a: "true",
      b: "false",
      c: "undefined",
      d: "NaN"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the correct way to create a function in JavaScript?",
    choices: {
      a: "function = exampleFunction() {}",
      b: "var exampleFunction = function() {}",
      c: "function exampleFunction() {}",
      d: "var exampleFunction = () => {}"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the output of the following code?\n\nconsole.log(typeof null);",
    choices: {
      a: "null",
      b: "undefined",
      c: "object",
      d: "string"
    },
    correctAnswer: "c"
  },
  {
    question: "Which of the following is NOT a comparison operator in JavaScript?",
    choices: {
      a: "==",
      b: "===",
      c: "!=",
      d: "!=="
    },
    correctAnswer: "d"
  },
  {
    question: "What is the output of the following code?\n\nvar exampleArray = [1, 2, 3];\nconsole.log(exampleArray[2]);",
    choices: {
      a: "1",
      b: "2",
      c: "3",
      d: "undefined"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the correct way to write an 'if' statement in JavaScript?",
    choices: {
      a: "if exampleVariable == true then {}",
      b: "if (exampleVariable == true) {}",
      c: "if exampleVariable equals true {}",
      d: "if exampleVariable is true then {}"
    },
    correctAnswer: "b"
  },
  {
    question: "What is the output of the following code?\n\nconsole.log(5 > 3 && 2 < 4);",
    choices: {
      a: "true",
      b: "false",
      c: "undefined",
      d: "NaN"
    },
    correctAnswer: "a"
  }
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