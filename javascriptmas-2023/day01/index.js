const daysDisplay = document.getElementById('days')
const hoursDisplay = document.getElementById('hours')
const minsDisplay = document.getElementById('minutes')
const secsDisplay = document.getElementById('seconds')

function renderCountDown() {
    // is 11 because the calendar starts with 0 - january
    const xmas = new Date(2023, 11, 25, 0, 0, 0).getTime()
    const today = new Date().getTime()
    const remainingTime = xmas - today

    // values in ms
    const oneDay = 24*60*60*1000
    const oneHour = 60*60*1000
    const oneMinute = 60*1000

    // calculate values
    let days = Math.floor(remainingTime / oneDay)
    let hours = Math.floor((remainingTime % oneDay) / oneHour)
    let mins = Math.floor((remainingTime % oneHour) / oneMinute)
    let secs = Math.floor((remainingTime % oneMinute) / 1000)

    // set values in the  html
    daysDisplay.innerText = days
    hoursDisplay.innerText = hours
    minsDisplay.innerText = mins
    secsDisplay.innerText = secs
}

let countdown = setInterval(renderCountDown, 1000)

renderCountDown()