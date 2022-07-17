var returnBtn = document.querySelector("#return");
var showScore = document.querySelector("#score-span");
var submitBtn = document.querySelector("#submit");
var resultsSpan = document.querySelector("#results")

showScore.innerHTML = score;

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
        localStorage.setItem(playerCredentials, score);

        resultsSpan.append(playerCredentials + " " + score);
    }
})

quizScores();