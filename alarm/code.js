const alarmTimeInput = document.getElementById("alarmTime");
const setAlarmButton = document.getElementById("setAlarm");
const clearAlarmButton = document.getElementById("clearAlarm");
const currentTimeDiv = document.getElementById("currentTime");
const alarmSound = document.getElementById("alarmSound");

let alarmInterval;

function updateCurrentTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  currentTimeDiv.textContent = "Current time: " + timeString;
}

function checkAlarm() {
  const now = new Date();
  const alarmTime = new Date(now.toDateString() + " " + alarmTimeInput.value);

  if (now.getTime() === alarmTime.getTime()) {
    alarmSound.play();
    alert("Alarm!");
  }
}

setAlarmButton.addEventListener("click", () => {
  if (alarmTimeInput.value) {
    alarmInterval = setInterval(checkAlarm, 1000);
    alert("Alarm set for " + alarmTimeInput.value);
  }
});

clearAlarmButton.addEventListener("click", () => {
  clearInterval(alarmInterval);
  alarmSound.pause();
  alarmSound.currentTime = 0;
  alert("Alarm cleared!");
});

updateCurrentTime();
setInterval(updateCurrentTime, 1000);