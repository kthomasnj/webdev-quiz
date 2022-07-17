var returnBtn = document.querySelector("#return");
var showScore = document.querySelector("#score-span");
var submitBtn = document.querySelector("#submit");
var resultsSpan = document.querySelector("#results")
var resetScoresBtn = document.querySelector("#clear");
var currentScoreStorage = localStorage.getItem('score');

returnBtn.addEventListener("click", function () {
    window.location = "index.html";
});

function quizScores() {
    var storedScores = Object.entries(localStorage);

    for (var i = 0; i < storedScores.length; i++) {
        resultsSpan.append(storedScores[i]);
    }
}

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    var playerCredentials = document.querySelector("#initials").value;

    if (playerCredentials === "") {
        alert("Initial cannot be blank");
    } else {
        localStorage.setItem(playerCredentials, localStorage.getItem('score'));

        resultsSpan.append(playerCredentials + " " + currentScoreStorage);
    }
})

resetScoresBtn.addEventListener("click", function (event) {
    console.log(resetScoresBtn);
    resultsSpan.textContent = " ";
    localStorage.clear();
})

showScore.textContent = currentScoreStorage;
quizScores();