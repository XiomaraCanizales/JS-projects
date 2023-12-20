//import JSConfetti from 'js-confetti'
document.addEventListener('submit', handleGuess)
const wordDisplay = document.getElementById('word-display')
const playBtn = document.getElementById('btn-play')

function getWord() {
    const christmasWords = [
        "snowflake", "reindeer", "santa", "elf", "stocking",
        "gingerbread", "ornament", "tree", "carols", "presents",
        "lights", "mistletoe", "eggnog", "sleigh", "hot chocolate",
        "crackers", "cranberries", "holly", "candy cane", "angel",
        "star", "peace", "joy", "giving", "family",
        "celebration", "feast", "fireplace", "snowman", "advent",
      ]
    const randomWord = Math.floor(Math.random() * christmasWords.length)
    return christmasWords[randomWord]
}

let word = getWord()
let wordArr = word.split('')
console.log(wordArr)

// the function makes squares for the word
function renderSpaces() {
    playBtn.disabled = true
    const wordHtml = wordArr.map(() => {
        return `<span class='letter'>-</span>`
    })
    wordDisplay.innerHTML = wordHtml.join('')
}
renderSpaces()

// the function puts the letter in its positon
function renderGuess(arr) {
    const wordHtml = arr.map((letter) => {
        return `<span class='letter'>${letter}</span>`
    })
    wordDisplay.innerHTML = wordHtml.join('')
}

function handleGuess(e) {
    e.preventDefault()

    /* bugs begin 🦠 */
    let currentState = []
    let input = document.getElementById('user-input')
    let guess = input.value
    const guessArr = guess.split('')
    for (let i = 0; i < wordArr.length; i++){
        if (wordArr[i] === guessArr[i]) {
            currentState.push(guessArr[i])
        } else {
            currentState.push('-')
        }
    }
    /* bugs end 🦠 */
    renderGuess(currentState)
    checkWin(guess)
    input.value = ''
}

function checkWin(guess) {
    if (word === guess) {
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti({
            emojis: ['🧑‍🎄', '🎅', '🎁', '🎄'],
            emojiSize: 50,
            confettiNumber: 60,
            confettiRadius: 6,
        })
        jsConfetti.addConfetti()
    }
    playBtn.disabled = false
}

playBtn.addEventListener('click', () => {
    word = getWord()
    wordArr = word.split('')
    console.log(wordArr)
    renderSpaces()
})