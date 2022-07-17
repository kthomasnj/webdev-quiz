var startQuizBtn = document.querySelector("#start-quiz");
var resultsHeader = document.querySelector("#results-header");
var questions = document.querySelector("#question");
var questionOptions = document.querySelector("#options");
var pageOne = document.querySelector("#page-one");
var pageTwo = document.querySelector("#page-two");
var pageThree = document.querySelector("#page-three");
var clock = document.querySelector("#timer");
var currentScore = document.querySelector("#score-span");
var questionsArray = ["Commonly used data types DO Not include:",
    "The condition in an if/else statement is enclosed with ______.",
    "Arrays in JavaScript can be used to store ________",
    "String values must be enclosed within ______ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing content to the debugger is:"];
var score = 0;
var time = 1;

function startTimer() {
    setInterval(function () {
        if (time > 0) {
            clock.textContent = "Timer: " + time;
            time--;
        } else if (time === 0) {
            clock.textContent = "Timer: " + time;
            time--;
        } else {
            return finalScore();

        }
    }, 1000);
}

function displayQuestion() {
    for (i = 0; i > questionsArray.length; i++) {
        console.log(questionsArray[i]);
    }
}

function finalScore() {
    window.location = "scores.html";
}

startQuizBtn.addEventListener("click", function () {
    pageOne.style.display = "none";
    pageTwo.style.display = "flex";

    displayQuestion();
    startTimer();
    });