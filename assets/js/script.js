
const handleClock = () => {
    time--;
    document.getElementById('timer').innerText = time;
};

const handleClick = () => {
    var time = 60;

    handleClock();
    document.querySelector('main').innerHTML = '';
};

time
document.querySelector("#start-quiz")
    .addEventListener("click", handleClick)