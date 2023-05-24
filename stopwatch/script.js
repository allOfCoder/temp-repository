const $stopwatch = document.querySelector(".stopwatch");
const $timeNow = document.querySelector(".time-now");
const $startPause = document.querySelector(".start-pause");
const $fiveSec = document.querySelector(".five-sec");

var timeSec = 0;
var timeDisplay;
$timeNow.innerText = "0";
var intervalId;
var timeoutId;
var stateTimeFlow = false;

function startStopwatch() {
    intervalId = setInterval(() => {
        timeSec += 1
        $timeNow.innerText = `${timeSec}`;
    }, 100)
}
function stopStopwatch() {
    clearInterval(intervalId);
}
function resetTime() {
    timeSec = 0;
    $timeNow.innerText = `${"0"}`;
    stateTimeFlow = false;
    clearInterval(intervalId);
}
function awaitFiveSec() {
    let waitFiveSecPromise = new Promise((resolve, reject) => {
        timeoutId = setTimeout(() => {
            resolve(true);
        }, 5000);
    });
    return waitFiveSecPromise
}
async function pauseFiveSec() {
    if (!stateTimeFlow) {
        return;
    }
    clearTimeout(timeoutId);
    stopStopwatch();
    await awaitFiveSec();
    startStopwatch();
}

$stopwatch.addEventListener("click", () => {
    resetTime();
});
$startPause.addEventListener("click", () => {
    if (!stateTimeFlow) {
        stateTimeFlow = true;
        startStopwatch();
    } else {
        stateTimeFlow = false;
        stopStopwatch();
    }
})
$fiveSec.addEventListener("click", () => {
    pauseFiveSec();
})
