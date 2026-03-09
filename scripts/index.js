let [hours, minutes, seconds] = [0, 0, 0];

let displayTime = document.getElementById("displayTime");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let resetButton = document.getElementById("resetButton");

let intervalId = null;

// increase seconds, minutes and hours by one every 60 cycles
function stopWatch() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  // add zero hours, minutes or seconds are less than 10
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = h + ":" + m + ":" + s;
}

// start timer when start button is clicked
// and increase it every second
function startWatch() {
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(stopWatch, 1000);
}

// stop watch
function stopTimer() {
  clearInterval(intervalId);
}

// reset watch
function resetWatch() {
  clearInterval(intervalId);
  [hours, minutes, seconds] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
}

stopButton.addEventListener("click", stopTimer);
startButton.addEventListener("click", startWatch);
resetButton.addEventListener("click", resetWatch);