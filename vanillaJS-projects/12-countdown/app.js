const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

// 1. grab elements from webpage
const final_date = document.querySelector(".final-date")
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline-format h4")

// 2. set date
// this hardcode
// let futureDate = new Date(2022, 7, 15, 10, 30, 0)
// today + 10 days
let tempDate = new Date()
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDate()
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)

// 3. find dates
// year
const year = futureDate.getFullYear()
// month
let month = futureDate.getMonth()
month = months[month]
// date
const date = futureDate.getDate()
// day
const weekday = weekdays[futureDate.getDay()]
// hours & mins
const hours = futureDate.getHours()
const mins = futureDate.getMinutes()

// 4.print data on page
final_date.textContent = `time ends on ${weekday}, ${date} ${month} ${year} ${hours}:${mins}`

// 5. create counter - future time in ms
const futureTime = futureDate.getTime()

function getRemainingTime() {
    const today = new Date().getTime()
    const t = futureTime - today
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hr

    // values in ms
    const oneDay = 24*60*60*1000
    const oneHour = 60*60*1000
    const oneMinute = 60*1000

    // calculate all values
    let days = Math.floor(t / oneDay)
    let hours = Math.floor((t % oneDay) / oneHour)
    let mins = Math.floor((t % oneHour) / oneMinute)
    let secs = Math.floor((t % oneMinute) / 1000)

    // set values array
    const values = [days, hours, mins, secs]

    function format(item) {
        if (item < 10) {
            return (item = `0${item}`)
        }
        return item
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index])
    })

    if (t < 0) {
        clearInterval(coutdown)
        deadline.innerHTML = `<h4 class="expired">deadline was met</h4>`
    }

}

// refresh page
let coutdown = setInterval(getRemainingTime, 1000)

getRemainingTime()
