const selectMenu = document.querySelectorAll("select");
const currentTime = document.querySelector("h1");
setAlarmButton = document.querySelector("#alarmBtn");
setPauseButton = document.querySelector("#pauseBtn");

const minutes = parseInt(document.querySelector("#timeMin").value);
const hours = parseInt(document.querySelector("#timeHrs").value);

if (minutes >= 60) {
    minutes = 59;
} else if (hours >= 24) {
    hours = 23;
}

currentTime.innerText = `${hours}:${minutes}:00`;

let interval;

function setAlarm() {
    if (setAlarmButton.innerText == "Reset Alarm") {
        setAlarmButton.innerText = "Set Alarm";
        setPauseButton.style.display = "none";
        clearInterval(interval);
        return;
    }
    if (setPauseButton.innerText == "Resume Alarm") {
        setPauseButton.innerText = "Pause Alarm";
        clearInterval(interval);
        return;
    }
    let dateTime = new Date();

    dateTime.setHours(dateTime.getHours() + hours);
    dateTime.setMinutes(dateTime.getMinutes() + minutes);

    setPauseButton.style.display = "block";
    setAlarmButton.innerText = "Reset Alarm";

    interval = setInterval(() => {
        let intervalDate = new Date();
        let timeLeft = dateTime - intervalDate;

        let hours = Math.floor((timeLeft / 1000 / 60 / 60) % 60);
        let minutes = Math.floor((timeLeft / 1000 / 60) % 60);
        let seconds = Math.floor((timeLeft / 1000) % 60);
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        currentTime.innerText = `${hours} : ${minutes} : ${seconds}`;

        if (timeLeft < 0) {
            clearInterval(interval);
            alert("Your time is up");
        }
    }, 1000);
}

setAlarmButton.addEventListener("click", setAlarm);
