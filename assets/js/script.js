var startQuizBtn = document.querySelector("#start-quiz");
var pageOne = document.querySelector("#page-one");
var pageTwo = document.querySelector("#page-two");
var clock = document.querySelector("#timer");
var time = 5;
var questionsSpan = document.querySelector("#questions");
var quizQuestions = ["Question 1", "Question 2", "Question 3", "Questioon 4"];
var answerOptionsQ1 = ["Red", "Blue", "Green", "Yellow"];
var answerOptionsQ2 = ["Black", "Brown", "Teal", "Gray"];
var answerOptionsQ3 = ["White", "Light Grey", "Silver", "Gold"];
var answerOptionsQ4 = ["Peach", "Orange", "Pink", "Aqua"];

function startQuiz() {
    setInterval(function () {
        if (time > 0) {
            clock.textContent = "Timer: " + time;
            time--;
        } else if (time === 0) {
            clock.textContent = "Timer: " + time;
            time--;
        } else {
            return questionsSpan.textContent = "QUIZ OVER!!!"
        }
    }, 1000);
}






// var startQuizBtn = document.querySelector("#start-quiz");
// var pageOne = document.querySelector("#first-page");
// var pageTwo = document.querySelector("#question");


// var time = 60;

// function startQuiz () {
//     if(time > 0) {
//         timeRemaining.innerHTML = "Time: " + time;
//         time--;

//         console.log(time);

//     } else if (time === 0) {
//         timeRemaining.innerHTML = "TIMES UP";
//     }
// }




//     startQuiz();
// });

startQuizBtn.addEventListener("click", function () {
    pageOne.style.display = "none";
    pageTwo.style.display = "flex";

    startQuiz();
})