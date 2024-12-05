// UPDATE TIMER
// timer object
const timer = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4,
    sessions: 0,
};

// starTimer function 
const mainButton = document.getElementById('js-btn');
mainButton.addEventListener('click', () => {
    const { action } = mainButton.dataset;
    if (action === 'start') {
        startTimer();
    } else {
        stopTimer();
    }
})

// create an eventListener to detect a click on the buttons and a function of the timer
const modeButtons = document.querySelector('#js-mode-buttons')
modeButtons.addEventListener('click', handleMode);

// with this function the data-mode of the clicked button is retrieved
function handleMode(event) {
    const { mode } = event.target.dataset;
    if (!mode) return;
    switchMode(mode);
    stopTimer();
}

// function to add mode and remainingTime to timer
function switchMode(mode) {
    timer.mode = mode;
    timer.remainingTime = {
        total: timer[mode] * 60,
        minutes: timer[mode],
        seconds: 0,
    };

    document.querySelectorAll('button[data-mode]').forEach(e => e.classList.remove('active'));
    document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
    document.body.style.backgroundColor = `var(--${mode})`;
    document.getElementById('js-progress').setAttribute('max', timer.remainingTime.total);

    updateClock();
}

// update time
function updateClock() {
    const { remainingTime } = timer;
    const minutes = `${remainingTime.minutes}`.padStart(2, '0');
    const seconds = `${remainingTime.seconds}`.padStart(2, '0');

    const min = document.getElementById('js-minutes');
    const sec = document.getElementById('js-seconds');
    min.textContent = minutes;
    sec.textContent = seconds;

    const text = timer.mode === 'pomodoro' ? 'Time to Work!' : 'Take a Break';
    document.title = `${minutes}.${seconds} - ${text}`;

    const progress = document.getElementById('js-progress');
    progress.value = timer[timer.mode] * 60 - timer.remainingTime.total;
}

// START TIMER
let interval;
function startTimer() {
    let { total } = timer.remainingTime;
    const endTime = Date.parse(new Date()) + total * 1000;

    if (timer.mode === 'pomodoro') timer.sessions++;

    mainButton.dataset.action = 'stop';
    mainButton.textContent = 'stop';
    mainButton.classList.add('active');

    interval = setInterval(function() {
        timer.remainingTime = getRemainingTime(endTime);
        updateClock();

        total = timer.remainingTime.total;
        if (total <= 0) {
            clearInterval(interval);

            // checking sessions
            switch (timer.mode) {
                case 'pomodoro':
                    if (timer.sessions % timer.longBreakInterval === 0) {
                        switchMode('longBreak');
                    } else {
                        switchMode('shortBreak');
                    }
                    break;
                default:
                    switchMode('pomodoro')
            }

            startTimer();
        }
    }, 1000);
}

function getRemainingTime(endTime) {
    const currentTime = Date.parse(new Date());
    const difference = endTime - currentTime;

    const total = Number.parseInt(difference / 1000, 10);
    const minutes = Number.parseInt((total / 60) % 60, 10);
    const seconds = Number.parseInt(total % 60, 10);

    return {
        total,
        minutes,
        seconds,
    };
}

document.addEventListener('DOMContentLoaded', () => {
    switchMode('pomodoro');
});

// STOP TIMER
function stopTimer() {
    clearInterval(interval);

    mainButton.dataset.action = 'start';
    mainButton.textContent = 'start';
    mainButton.classList.remove('active');
}