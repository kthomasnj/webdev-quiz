var returnBtn = document.querySelector("#return");
var showScore = document.querySelector("#score-span");

showScore.innerHTML = score;
console.log(score);

returnBtn.addEventListener("click", function () {
    window.location = "index.html";
});