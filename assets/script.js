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


//code for timer linked to start button
var timer = document.querySelector("#time");
var startBtn = document.querySelector("#start");
let count = 30;


//timer button counts down
function startQuiz() {

};

startBtn.addEventListener("click", startQuiz) {
    count--;
    time.textContent = count;
    if (count === 0) {
        clearInterval(interval);
    }

}

