// call html elements
const santaBtn = document.getElementById('santa-btn')
const shuffleBtn = document.getElementById('shuffle-btn')
const display = document.querySelector('.secret-display')

// array
const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"]

// function to shuffle array
function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5)
}

// function to generate secret santa
function generateSecretSantaPairs(arr) {
    // shuffle to have different values
    shuffleArray(arr)
    // creates a set of unique values
    const uniqueValues = new Set(arr)
    // adds the pairs
    const pairs = []
    // function core
    for (let i = 0; i < arr.length; i++) {
        const person = arr[i]
        const j = (i + 1) % uniqueValues.size
        const otherPerson = Array.from(uniqueValues)[j]
        pairs.push([person, otherPerson])
   }

   // display on html
    pairs.forEach(pair => {
        const p = document.createElement('p')
        p.textContent = `${pair[0]} ☞ ${pair[1]}`
        display.appendChild(p)
   })
  
}

// button to generate secret santa
santaBtn.addEventListener('click', () => {
    generateSecretSantaPairs(people)
    santaBtn.classList.add('btn-delete')
    shuffleBtn.classList.add('btn-show')
    shuffleBtn.addEventListener('click', reset)
})

// resets and shuffles for new pairs
function reset() {
    // clear the existing pairs display
    while (display.firstChild) {
      display.removeChild(display.firstChild)
    }
    // generate and display new pairs
    generateSecretSantaPairs(people)
  }