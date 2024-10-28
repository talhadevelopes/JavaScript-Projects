let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById('js-displayTime');
let timer = null;
let startStopWatch = document.getElementById('start-stop-watch');
let stopStopWatch = document.getElementById('stop-stop-watch');
let resetStopWatch = document.getElementById('reset-stop-watch');

window.onload = function() {
    loadSavedTime();
}

startStopWatch.addEventListener('click', watchStart);
stopStopWatch.addEventListener('click', watchStop);
resetStopWatch.addEventListener('click', watchReset);

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {
    if (timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}

function watchStop() {
    clearInterval(timer);
    saveTimeToLocalStorage();
}

function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = '00:00:00';
    saveTimeToLocalStorage(); // Save reset time to localStorage
}

// Function to save the current time to localStorage
function saveTimeToLocalStorage() {
    const time = {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
    localStorage.setItem('stopwatchTime', JSON.stringify(time));
}

// Function to load the saved time from localStorage
function loadSavedTime() {
    const savedTime = localStorage.getItem('stopwatchTime');
    if (savedTime) {
        const { hours: savedHours, minutes: savedMinutes, seconds: savedSeconds } = JSON.parse(savedTime);
        [hours, minutes, seconds] = [savedHours, savedMinutes, savedSeconds];

        let h = hours < 10 ? "0" + hours : hours;
        let m = minutes < 10 ? "0" + minutes : minutes;
        let s = seconds < 10 ? "0" + seconds : seconds;

        displayTime.innerHTML = h + ":" + m + ":" + s;
    }
}
