var returnBtn = document.querySelector("#return");
var showScore = document.querySelector("#score-span");
var submitBtn = document.querySelector("#submit");
var resultsSpan = document.querySelector("#results")
var resetScoresBtn = document.querySelector("#clear");
var currentScoreStorage = localStorage.getItem('currentScore');
var storedScores = JSON.parse(localStorage.getItem("score") || "[]");

returnBtn.addEventListener("click", function () {
    localStorage.removeItem("currentScore");
    window.location = "index.html";
})

function quizScores() {
    for (var i = 0; i < storedScores.length; i++) {
        var createELLi = document.createElement('li')
        createELLi.textContent = storedScores[i].initials + ": " + storedScores[i].score;
        resultsSpan.appendChild(createELLi);
    }
}

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    var playerCredentials = document.querySelector("#initials").value;

    if (playerCredentials === "") {
        alert("Initial cannot be blank");
    } else {
        storedScores.push({ initials: playerCredentials, score: localStorage.getItem("currentScore") });
        localStorage.setItem("score", JSON.stringify(storedScores));

        var createELLi2 = document.createElement('li')
        createELLi2.textContent = playerCredentials + ": " + currentScoreStorage;
        resultsSpan.appendChild(createELLi2);
    }
})

resetScoresBtn.addEventListener("click", function (event) {
    console.log(resetScoresBtn);
    resultsSpan.textContent = " ";
    localStorage.removeItem("score");
})

showScore.textContent = currentScoreStorage;
quizScores();