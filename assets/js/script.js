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
let currentQuestionIndex = 0;

// Get elements from the page
const startButton = document.getElementById("start");
const timeDisplay = document.getElementById("time");
const questionContainer = document.getElementById("question-container");



//code for timer linked to start button
var timer = document.querySelector("#time");
var startBtn = document.querySelector("#start");
let count = 30;




//timer button counts down
startButton.addEventListener('click', () => {
  // start the timer
  const timer = setInterval(function() {
    timeLeft--;
    // update the time left on the page
    const timerDisplay = document.getElementById('time');
    timerDisplay.textContent = `Time left: ${timeLeft} seconds`;

    if (timeLeft === 0) {
      clearInterval(timer);
      endQuiz(); // call function to end the quiz when time is up
    }
  }, 1000); // update time every 1 second

  // present the first question
  const questionContainer = document.getElementById('question-container');
  showQuestion(questionContainer, questions[currentQuestionIndex]);
});


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


function checkAnswer(choice, question) {
  // check if the choice is correct
  if (choice.dataset.correct === "true") {
    // if correct, update score
    score++;
  } else {
    // if wrong, deduct time
    timeLeft -= 10;
  }


  function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = `Score: ${score}`;
}

function updateTimeLeft() {
  const timerDisplay = document.getElementById('time');
  timerDisplay.textContent = `Time left: ${timeLeft} seconds`;
}

  // update score and time left on the page
  updateScore();
  updateTimeLeft();

  // move on to the next question or end the quiz if it's the last question
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questionContainer, questions[currentQuestionIndex]);
  } else {
    endQuiz();
  }
}


function endQuiz() {
  // stop the timer
  clearInterval(timer);

  // hide the question container
  const questionContainer = document.getElementById('question-container');
  questionContainer.style.display = 'none';

  // show the end screen
  const endScreen = document.getElementById('end-screen');
  endScreen.style.display = 'block';

  // display the final score
  const finalScore = document.getElementById('final-score');
  finalScore.textContent = `Your final score is: ${score}`;

  // create a form for user to enter their initials and score
  const form = document.createElement('form');
  form.innerHTML = `
    <div class="form-group">
      <label for="initials">Enter Initials:</label>
      <input type="text" class="form-control" id="initials" required>
    </div>
    <button type="submit" class="btn btn-primary" id="submit">Submit</button>
  `;

  // add event listener to form submit button
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const initials = document.getElementById('initials').value;
    storeHighscore(initials, score);
    window.location.href = 'highscores.html'; // redirect to high scores page
  });

  endScreen.appendChild(form);
}
