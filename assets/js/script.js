var startQuizBtn = document.querySelector("#start-quiz");
var resultsHeader = document.querySelector("#results-header");
var questions = document.querySelector("#question");
var questionOptions = document.querySelector("#options");
var pageOne = document.querySelector("#page-one");
var pageTwo = document.querySelector("#page-two");
var pageThree = document.querySelector("#page-three");
var clock = document.querySelector("#timer");
var currentScore = document.querySelector("#score-span");

var optionOne = document.querySelector("#option-one");
var optionTwo = document.querySelector("#option-two");
var optionThree = document.querySelector("#option-three");
var optionFour = document.querySelector("#option-four");

var questionArray = [{
    Question: "Commonly used data types DO Not include",
    Options: ["strings", "booleans", "alerts", "numbers"],
    Answer: "Alerts"
},
{
    Question: "The condition in an if/else statement is enclosed with ______.",
    Options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    Answer: "parenthesis"
},
{
    Question: "Arrays in JavaScript can be used to store ________.",
    Option1: "numbers of strings",
    Option2: "other arrays", 
    Option3: "Booleans", 
    Option4: "all of the above",
    Answer: "Answer: all of the above"
},
{
    Question: "String values must be enclosed within ______ when being assigned to variables.",
    Options: ["commas", "curly brackets", "quotes", "parenthesis"],
    Answer: "parenthesis"
},
{
    Question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    Options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    Answer: "console.log"
}];

var score = 0;
var time = 5;

function startTimer() {
    var time = 60;
    setInterval(function () {
        if (time > 0) {
            clock.textContent = "Timer: " + time;
            time--;
        } else if (time === 0) {
            clock.textContent = "Timer: " + time;
            time--;
        } else {
            return quizComplete();

        }
    }, 1000);
}

function scoreLocalStorage() {
    localStorage.setItem("currentScore", score);
}

function quizComplete() {
    scoreLocalStorage();
    window.location = "scores.html";
}

startQuizBtn.addEventListener("click", function () {
    pageOne.style.display = "none";
    pageTwo.style.display = "flex";

    var currentQuestionArray = [];

    // var i = 0;
    //     if (i < 5) {
    //         questions.textContent = questionOneArray[0];
    //         optionOne.textContent = questionOneArray[1];
    //         optionTwo.textContent = questionOneArray[2];
    //         optionThree.textContent = questionOneArray[3];
    //         optionFour.textContent = questionOneArray[4];
    //     }

    optionOne.addEventListener("click", function () {
        console.log("Option 1 Clicked");
    })
    optionTwo.addEventListener("click", function () {
        console.log("Option 2 Clicked");
    })
    optionThree.addEventListener("click", function () {
        console.log("Option 3 Clicked");
    })
    optionFour.addEventListener("click", function () {
        console.log("Option 4 Clicked");
    })

    for (i = 0; i < questionArray.length; i++) {
        console.log(i);
        questions.textContent = questionArray[i].Question;
        optionOne.textContent = questionArray[i].Option1;
        optionTwo.textContent = questionArray[i].Option2;
        optionThree.textContent = questionArray[i].Option3;
        optionFour.textContent = questionArray[i].Option4;
    }
    startTimer();
});