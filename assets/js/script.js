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

var optionQ2One = document.querySelector("#option-one");
var optionQ2Two = document.querySelector("#option-two");
var optionQ2Three = document.querySelector("#option-three");
var optionQ2Four = document.querySelector("#option-four");

var optionQ3One = document.querySelector("#option-one");
var optionQ3Two = document.querySelector("#option-two");
var optionQ3Three = document.querySelector("#option-three");
var optionQ3Four = document.querySelector("#option-four");

var optionQ4One = document.querySelector("#option-one");
var optionQ4Two = document.querySelector("#option-two");
var optionQ4Three = document.querySelector("#option-three");
var optionQ4Four = document.querySelector("#option-four");

var optionQ5One = document.querySelector("#option-one");
var optionQ5Two = document.querySelector("#option-two");
var optionQ5Three = document.querySelector("#option-three");
var optionQ5Four = document.querySelector("#option-four");

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
var time = 0;

function startTimer() {
    time = 400;
    setInterval(function () {
        if (time > 0) {
            clock.textContent = "Timer: " + time;
            time--;
        } else if (time === 0) {
            clock.textContent = "Timer: " + time;
            time--;
        } else {
            // return quizComplete();

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

function disableQ1Eventlisteners () {
    optionOne.removeEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion4();
    })
    optionTwo.removeEventListener("click", function () {        
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion4();
    })
    optionThree.removeEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion4();
    })
    optionFour.removeEventListener("click", function () {
        console.log("3.Before Score: " + score);
        score += 20;
        console.log(score);
        questionResult.textContent = "Correct!!! Score: " + score;
        addQuestion4();
    })
}

function disableQ2Eventlisteners () {
    optionQ2One.removeEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion3();
    })
    optionQ2Two.removeEventListener("click", function () {        
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion3();
    })
    optionQ2Three.removeEventListener("click", function () {
        console.log("2.Before Score: " + score);
        score += 20;
        console.log(score);
        questionResult.textContent = "Correct!!! Score: " + score;
        addQuestion3();
    })
    optionQ2Four.removeEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion3();                
    })
}

function disableQ3Eventlisteners () {
    optionOne.removeEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion4();
    })
    optionQ3Two.removeEventListener("click", function () {        
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion4();
    })
    optionQ3Three.removeEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion4();
    })
    optionQ3Four.removeEventListener("click", function () {
        console.log("3.Before Score: " + score);
        score += 20;
        console.log(score);
        questionResult.textContent = "Correct!!! Score: " + score;
        addQuestion4();
    })
}

function disableQ4Eventlisteners () {
    optionOne.removeEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion5();
    })
    optionQ4Two.removeEventListener("click", function () {        
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion5();
    })
    optionQ4Three.removeEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion5();
    })
    optionQ4Four.removeEventListener("click", function () {
        console.log("4.Before Score: " + score);
        score += 20;
        console.log(score);
        questionResult.textContent = "Correct!!! Score: " + score;
        addQuestion5();        
    })
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


function addQuestion2() {
    disableQ1Eventlisteners();

    questions.textContent = questionArray[1].Question;
    optionOne.textContent = questionArray[1].Option1;
    optionTwo.textContent = questionArray[1].Option2;
    optionThree.textContent = questionArray[1].Option3;
    optionFour.textContent = questionArray[1].Option4;

    optionQ2One.addEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion3();
    })
    optionQ2Two.addEventListener("click", function () {        
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion3();
    })
    optionQ2Three.addEventListener("click", function () {
        console.log("2.Before Score: " + score);
        score += 20;
        console.log(score);
        questionResult.textContent = "Correct!!! Score: " + score;
        addQuestion3();
    })
    optionQ2Four.addEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion3();                
    })
}

function addQuestion3() {
    disableQ2Eventlisteners();

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
    optionQ3Two.addEventListener("click", function () {        
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion4();
    })
    optionQ3Three.addEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion4();
    })
    optionQ3Four.addEventListener("click", function () {
        console.log("3.Before Score: " + score);
        score += 20;
        console.log(score);
        questionResult.textContent = "Correct!!! Score: " + score;
        addQuestion4();
    })
}

function addQuestion4() {
    disableQ3Eventlisteners();

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
    optionQ4Two.addEventListener("click", function () {        
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion5();
    })
    optionQ4Three.addEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        addQuestion5();
    })
    optionQ4Four.addEventListener("click", function () {
        console.log("4.Before Score: " + score);
        score += 20;
        console.log(score);
        questionResult.textContent = "Correct!!! Score: " + score;
        addQuestion5();        
    })
}

function addQuestion5() {
    disableQ4Eventlisteners();

    questions.textContent = questionArray[4].Question;
    optionOne.textContent = questionArray[4].Option1;
    optionTwo.textContent = questionArray[4].Option2;
    optionThree.textContent = questionArray[4].Option3;
    optionFour.textContent = questionArray[4].Option4;

    optionQ5One.addEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        quizComplete();
    })
    optionQ5Two.addEventListener("click", function () {        
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        quizComplete();
    })
    optionQ5Three.addEventListener("click", function () {
        time -= 10;
        questionResult.textContent = "Wrong! Score: " + score;
        quizComplete();
    })
    optionQ5Four.addEventListener("click", function () {
        console.log("5.Before Score: " + score);
        score += 20;
        console.log(score);
        questionResult.textContent = "Correct!!! Score: " + score;
        quizComplete();        
    })
}
});