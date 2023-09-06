const cardArray = [
    {
        name: 'cat1',
        img: 'images/cat1.png'
    },
    {
        name: 'cat2',
        img: 'images/cat2.png'
    },
    {
        name: 'cat3',
        img: 'images/cat3.png'
    },
    {
        name: 'cat4',
        img: 'images/cat4.png'
    },
    {
        name: 'cat5',
        img: 'images/cat5.png'
    },
    {
        name: 'cat6',
        img: 'images/cat6.png'
    },
    {
        name: 'cat7',
        img: 'images/cat7.png'
    },
    {
        name: 'cat8',
        img: 'images/cat8.png'
    },
    {
        name: 'cat9',
        img: 'images/cat9.png'
    },
    {
        name: 'cat1',
        img: 'images/cat1.png'
    },
    {
        name: 'cat2',
        img: 'images/cat2.png'
    },
    {
        name: 'cat3',
        img: 'images/cat3.png'
    },
    {
        name: 'cat4',
        img: 'images/cat4.png'
    },
    {
        name: 'cat5',
        img: 'images/cat5.png'
    },
    {
        name: 'cat6',
        img: 'images/cat6.png'
    },
    {
        name: 'cat7',
        img: 'images/cat7.png'
    },
    {
        name: 'cat8',
        img: 'images/cat8.png'
    },
    {
        name: 'cat9',
        img: 'images/cat9.png'
    }
]

// sort an array randomly
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const scoreDisplay = document.querySelector('#score')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
const cardsWon = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/back-card.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    // if the same card was clicked
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/back-card.png')
        cards[optionTwoId].setAttribute('src', 'images/back-card.png')
        alert('You have clicked the same image')
    } // if cards are matched
    else if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src','images/white-card.png')
        cards[optionTwoId].setAttribute('src','images/white-card.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } // if not
    else { 
        cards[optionOneId].setAttribute('src','images/back-card.png')
        cards[optionTwoId].setAttribute('src','images/back-card.png')
        alert('Try again')
    }
    cardsChosen = []
    cardsChosenId = []
    scoreDisplay.textContent = cardsWon.length

    // if there aren't more cards
    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations, you found them all'
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)

    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}