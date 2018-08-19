var currentTime = 0;
var interval;
var isRunning = false;
var lastSaved = 0;

setup();

function startStop() {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
        return;
    }
    interval = setInterval(() => {
        currentTime += 0.01;
        time.innerHTML = currentTime.toFixed(2);
    }, 10)
    isRunning = true;
}

function reset() {
    clearInterval(interval);
    document.getElementById("times").innerHTML = '';
    currentTime = 0;
    time.innerHTML = currentTime;
    isRunning = false;
}

function record() {
    if (lastSaved != currentTime) {
        lastSaved = currentTime;
        document.getElementById("times").innerHTML += lastSaved.toFixed(2) + '<br>';
        
    }
}

function setup() {
    let time = document.getElementById("time");
    let startStopBtn = document.getElementById("startStop");
    let resetBtn = document.getElementById("reset");
    let recordBtn = document.getElementById("record");

    startStopBtn.addEventListener("click", startStop);
    resetBtn.addEventListener("click", reset);
    recordBtn.addEventListener("click", record);

    document.addEventListener("keydown", event => {
        switch (event.key) {
            case 's':
                startStopBtn.click();
                break;
            case 't':
                recordBtn.click();
                break;
            case 'r':
                resetBtn.click();
                break;
        }
    });

    time.innerHTML = currentTime;
}