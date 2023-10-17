var  countdownInterval;
var countdownDisplay = document.getElementById("countdownDisplay");

var stopwatchInterval;
var stopwatchDisplay = document.getElementById("stopwatchDisplay");
var stopwatchRunning = false;

function startCountdown() {
    clearInterval(countdownInterval);

    var hours = parseInt(document.getElementById("hours").value) || 0;
    var minutes = parseInt(document.getElementById("minutes").value) || 0;
    var seconds = parseInt(document.getElementById("seconds").value) || 0;

    var totalTime = (hours * 3600) + (minutes * 60) + seconds;
    
    countdownInterval = setInterval(function () {
        if (totalTime <= 0) {
            clearInterval(countdownInterval);
        } else {
            var hoursLeft = Math.floor(totalTime / 3600);
            var minutesLeft = Math.floor((totalTime % 3600) / 60);
            var secondsLeft = totalTime % 60;
            
            countdownDisplay.textContent = `${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
            totalTime--;
        }
    }, 1000);
}

function startStopStopwatch() {
    if (stopwatchRunning) {
        clearInterval(stopwatchInterval);
        document.getElementById("startStop").textContent = "Start";
    } else {
        stopwatchInterval = setInterval(function () {
            var time = stopwatchDisplay.textContent.split(":");
            var hours = parseInt(time[0]);
            var minutes = parseInt(time[1]);
            var seconds = parseInt(time[2]);

            seconds++;

            if (seconds >= 60) {
                seconds = 0;
                minutes++;

                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
            }

            stopwatchDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
        document.getElementById("startStop").textContent = "Stop";
    }

    stopwatchRunning = !stopwatchRunning;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchDisplay.textContent = "00:00:00";
    document.getElementById("startStop").textContent = "Start";
    stopwatchRunning = false;
}
