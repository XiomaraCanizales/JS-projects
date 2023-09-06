// 1. select elements
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
     switch (randomNumber) {
        case 1:
            computerChoice = 'rock'
            break;
        case 2:
            computerChoice = 'paper'
            break;
        case 3:
            computerChoice = 'scissors'
            break;
     }
     computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw'
    }

    if (userChoice === 'rock' &&  computerChoice === 'scissors') {
        result = 'you win!'
    }
    if (userChoice === 'paper' &&  computerChoice === 'rock') {
        result = 'you win!'
    }
    if (userChoice === 'scissors' &&  computerChoice === 'paper') {
        result = 'you win!'
    }

    if (userChoice === 'rock' &&  computerChoice === 'paper') {
        result = 'you lose!'
    }
    if (userChoice === 'scissors' &&  computerChoice === 'rock') {
        result = 'you lose!'
    }
    if (userChoice === 'paper' &&  computerChoice === 'scissors') {
        result = 'you lose!'
    }

    resultDisplay.innerHTML = result
}