const selectMenu = document.querySelectorAll("select");
const currentTime = document.querySelector("h1");
setAlarmButton = document.querySelector("#alarmBtn");

let interval;

for (let i = 12; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

function setAlarm() {
  if (setAlarmButton.innerText == "Clear Alarm") {
    currentTime.innerText = "00:00:00";
    setAlarmButton.innerText = "Set Alarm";
    clearInterval(interval);
    return;
  }
  let dateTime = new Date();
  const hours = parseInt(selectMenu[0].value);
  const minutes = parseInt(selectMenu[1].value);

  dateTime.setHours(dateTime.getHours() + hours);
  dateTime.setMinutes(dateTime.getMinutes() + minutes);

  setAlarmButton.innerText = "Clear Alarm";

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
