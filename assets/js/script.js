var startQuizBtn = document.querySelector("#start-quiz");
var resultsHeader = document.querySelector("#results-header");
var questions = document.querySelector("#question");
var questionOptions = document.querySelector("#options");
var pageOne = document.querySelector("#page-one");
var pageTwo = document.querySelector("#page-two");
var pageThree = document.querySelector("#page-three");
var clock = document.querySelector("#timer");
var currentScore = document.querySelector("#score-span");
var questionResult = document.querySelector("#question-result");

var optionOne = document.querySelector("#option-one");
var optionTwo = document.querySelector("#option-two");
var optionThree = document.querySelector("#option-three");
var optionFour = document.querySelector("#option-four");

var questionArray = [{
    Question: "1) Commonly used data types DO Not include",
    Option1: "strings",
    Option2: "booleans",
    Option3: "alerts",
    Option4: "numbers",
    Answer: "Option2"
},
{
    Question: "2) The condition in an if/else statement is enclosed with ______.",
    Option1: "quotes",
    Option2: "curly brackets",
    Option3: "parenthesis",
    Option4: "square brackets",
    Answer: "Option3"
},
{
    Question: "3) Arrays in JavaScript can be used to store ________.",
    Option1: "numbers of strings",
    Option2: "other arrays",
    Option3: "Booleans",
    Option4: "all of the above",
    Answer: "Option4"
},
{
    Question: "4) String values must be enclosed within ______ when being assigned to variables.",
    Option1: "commas",
    Option2: "curly brackets",
    Option3: "quotes",
    Option4: "parenthesis",
    Answer: "Option4"
},
{
    Question: "5) A very useful tool used during development and debugging for printing content to the debugger is:",
    Option1: "JavaScript",
    Option2: "terminal/bash",
    Option3: "for loops",
    Option4: "console.log",
    Answer: "Option4"
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

function addQuestion2() {
    questions.textContent = questionArray[1].Question;
    optionOne.textContent = questionArray[1].Option1;
    optionTwo.textContent = questionArray[1].Option2;
    optionThree.textContent = questionArray[1].Option3;
    optionFour.textContent = questionArray[1].Option4;

    optionOne.addEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion3();
    })
    optionTwo.addEventListener("click", function () {        
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion3();
    })
    optionThree.addEventListener("click", function () {
        console.log("2.Before Score: " + score);
        score += 20;
        console.log(score);
        questionResult.textContent = "Correct!!! Score: " + score;
        addQuestion3();
    })
    optionFour.addEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion3();                
    })
}

function addQuestion3() {
    questions.textContent = questionArray[2].Question;
    optionOne.textContent = questionArray[2].Option1;
    optionTwo.textContent = questionArray[2].Option2;
    optionThree.textContent = questionArray[2].Option3;
    optionFour.textContent = questionArray[2].Option4;

    optionOne.addEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion4();
    })
    optionTwo.addEventListener("click", function () {        
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion4();
    })
    optionThree.addEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion4();
    })
    optionFour.addEventListener("click", function () {
        console.log("3.Before Score: " + score);
        score += 20;
        console.log(score);
        questionResult.textContent = "Correct!!! Score: " + score;
        addQuestion4();
    })
}

function addQuestion4() {
    questions.textContent = questionArray[3].Question;
    optionOne.textContent = questionArray[3].Option1;
    optionTwo.textContent = questionArray[3].Option2;
    optionThree.textContent = questionArray[3].Option3;
    optionFour.textContent = questionArray[3].Option4;

    optionOne.addEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion5();
    })
    optionTwo.addEventListener("click", function () {        
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion5();
    })
    optionThree.addEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion5();
    })
    optionFour.addEventListener("click", function () {
        if(event.target.id === myQuestions[3].correctAnswer) {
            console.log("correct");
            score += 20;
            
        console.log("4.Before Score: " + score);
        score += 20;
        console.log(score);
        questionResult.textContent = "Correct!!! Score: " + score;
        addQuestion5();        
    })
}

function addQuestion5() {
    questions.textContent = questionArray[4].Question;
    optionOne.textContent = questionArray[4].Option1;
    optionTwo.textContent = questionArray[4].Option2;
    optionThree.textContent = questionArray[4].Option3;
    optionFour.textContent = questionArray[4].Option4;

    optionOne.addEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        quizComplete();
    })
    optionTwo.addEventListener("click", function () {        
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        quizComplete();
    })
    optionThree.addEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        quizComplete();
    })
    optionFour.addEventListener("click", function () {
        console.log("5.Before Score: " + score);
        score += 20;
        console.log(score);
        questionResult.textContent = "Correct!!! Score: " + score;
        quizComplete();        
    })
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

    questions.textContent = questionArray[0].Question;
    optionOne.textContent = questionArray[0].Option1;
    optionTwo.textContent = questionArray[0].Option2;
    optionThree.textContent = questionArray[0].Option3;
    optionFour.textContent = questionArray[0].Option4;

    optionOne.addEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion2();
    })
    optionTwo.addEventListener("click", function () {
        console.log("1.Before Score: " + score);
        score += 20;
        console.log(score);
        questionResult.textContent = "Correct!!! Score: " + score;
        addQuestion2();
    })
    optionThree.addEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion2();
    })
    optionFour.addEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion2();
    })

    startTimer();
});