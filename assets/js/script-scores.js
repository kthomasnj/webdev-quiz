var returnBtn = document.querySelector("#return");
var showScore = document.querySelector("#score-span");
var submitBtn = document.querySelector("#submit");
var resultsSpan = document.querySelector("#results")
var resetScoresBtn = document.querySelector("#clear");
var currentScoreStorage = localStorage.getItem('currentScore');
var storedScores = JSON.parse(localStorage.getItem("score") || "[]");


returnBtn.addEventListener("click", function () {
    window.location = "index.html";
});

function quizScores() {
    for (var i = 0; i < storedScores.length; i++) {
        resultsSpan.append(storedScores[i].initials + ": " + storedScores[i].score);
    }
}

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    var playerCredentials = document.querySelector("#initials").value;

    if (playerCredentials === "") {
        alert("Initial cannot be blank");
    } else {
        storedScores.push({initials: playerCredentials, score: localStorage.getItem("currentScore")});     
        localStorage.setItem("score", JSON.stringify(storedScores));

        resultsSpan.append("<li>" + playerCredentials + ": " + currentScoreStorage + "</li>");
    }
})

resetScoresBtn.addEventListener("click", function (event) {
    console.log(resetScoresBtn);
    resultsSpan.textContent = " ";
    localStorage.clear();
})

showScore.textContent = currentScoreStorage;
quizScores();