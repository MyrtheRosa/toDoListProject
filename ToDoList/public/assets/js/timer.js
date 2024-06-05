const currentTime = document.querySelector("h1");
const setAlarmButton = document.querySelector("#alarmBtn");
const setPauseButton = document.querySelector("#pauseBtn");

let interval;
let paused = false;
let hours = parseInt(document.querySelector("#timeHrs").value);
let minutes = parseInt(document.querySelector("#timeMin").value);

const menuDiv = document.querySelector(".menuDiv");

currentTime.innerText = `${hours}:${minutes}:00`;

function setAlarm() {
    if (setAlarmButton.innerText == "Reset Alarm") {
        setAlarmButton.innerText = "Set Alarm";
        setPauseButton.style.display = "none";
        currentTime.innerText = `${hours}:${minutes}:00`;
        menuDiv.style.height = "37rem";
        clearInterval(interval);
        return;
    }

    hours = parseInt(document.querySelector("#timeHrs").value);
    minutes = parseInt(document.querySelector("#timeMin").value);

    if (minutes >= 60) {
        minutes = 59;
    } else if (hours >= 24) {
        hours = 23;
    }

    currentTime.innerText = `${hours}:${minutes}:00`;

    let dateTime = new Date();
    dateTime.setHours(dateTime.getHours() + hours);
    dateTime.setMinutes(dateTime.getMinutes() + minutes);

    setPauseButton.style.display = "block";
    setAlarmButton.innerText = "Reset Alarm";
    menuDiv.style.height = "40rem";

    interval = setInterval(updateTime, 1000, dateTime);
}

function pauseAlarm() {
    if (!paused) {
        clearInterval(interval);
        setPauseButton.innerText = "Resume Alarm";
    } else {
        let currentTimeString = currentTime.innerText.split(":");
        let remainingHours = parseInt(currentTimeString[0]);
        let remainingMinutes = parseInt(currentTimeString[1]);
        let remainingSeconds = parseInt(currentTimeString[2]);

        let remainingTimeInMillis =
            (remainingHours * 60 * 60 +
                remainingMinutes * 60 +
                remainingSeconds) *
            1000;

        let dateTime = new Date();
        dateTime.setTime(dateTime.getTime() + remainingTimeInMillis);

        interval = setInterval(updateTime, 1000, dateTime);
        setPauseButton.innerText = "Pause Alarm";
    }
    paused = !paused;
}

function updateTime(dateTime) {
    let intervalDate = new Date();
    let timeLeft = dateTime - intervalDate;

    let hoursLeft = Math.floor((timeLeft / 1000 / 60 / 60) % 60);
    let minutesLeft = Math.floor((timeLeft / 1000 / 60) % 60);
    let secondsLeft = Math.floor((timeLeft / 1000) % 60);
    hoursLeft = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
    minutesLeft = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
    secondsLeft = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;

    currentTime.innerText = `${hoursLeft}:${minutesLeft}:${secondsLeft}`;

    if (!paused && timeLeft <= 0) {
        // Check if alarm is not paused and time is up
        clearInterval(interval);
        alert("Your time is up");
        setAlarmButton.innerText = "Set Alarm";
        setPauseButton.style.display = "none";
    }
}

setAlarmButton.addEventListener("click", setAlarm);
setPauseButton.addEventListener("click", pauseAlarm);
