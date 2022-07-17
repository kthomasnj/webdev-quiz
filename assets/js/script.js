var startQuizBtn = document.querySelector("#start-quiz");
var resultsHeader = document.querySelector("#results-header");
var questions = document.querySelector("#question");
var questionOptions = document.querySelector("#options");
var pageOne = document.querySelector("#page-one");
var pageTwo = document.querySelector("#page-two");
var pageThree = document.querySelector("#page-three");
var clock = document.querySelector("#timer");
var currentScore = document.querySelector("#score-span");
var score = 0;
var time = 2;

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

function finalScore() {
    window.location = "scores.html";
}

startQuizBtn.addEventListener("click", function () {
    pageOne.style.display = "none";
    pageTwo.style.display = "flex";

    startTimer();
});