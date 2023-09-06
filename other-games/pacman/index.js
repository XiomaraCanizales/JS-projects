const grid = document.querySelector('.grid');
const scoreDisplay = document.getElementById('score');
const scoreTitle = document.getElementById('score_title');
const width = 20;
let score = 0;
const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,3,1,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,
    1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,
    1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,
    1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,3,1,0,1,
    1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,
    1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,0,0,0,2,2,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,2,2,2,2,2,2,0,1,1,1,1,1,1,
    4,4,4,4,4,4,4,2,2,2,2,2,2,4,4,4,4,4,4,4,
    1,0,0,0,0,0,0,2,2,2,2,2,2,0,1,1,1,1,1,1,
    1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,
    1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,
    1,0,1,0,0,0,3,1,0,1,0,1,1,1,1,1,0,1,0,1,
    1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,3,1,0,1,
    1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
]

// Legend
// 0 - coins
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellet
// 4 - empty

const squares = [];

// create your board
function createBoard() {
    for (let i = 0; i < layout.length; i++) {
        const square = document.createElement('div')
        grid.appendChild(square)
        squares.push(square)
        
        // add layout to the board
        if (layout[i] === 0) {
            squares[i].classList.add('pac-dot')
        } else if (layout[i] === 1) {
            squares[i].classList.add('wall')
        } else if (layout[i] === 2) {
            squares[i].classList.add('ghost-lair')
        }else if (layout[i] === 3) {
            squares[i].classList.add('power-pellet')
        }
    }
}

createBoard();

let pacmanCurrentIndex = 250;

squares[pacmanCurrentIndex].classList.add('pacman');

// move pacman
function movePacman(e) {
    squares[pacmanCurrentIndex].classList.remove('pacman')
    switch(e.keyCode) {
        case 37:
            if (pacmanCurrentIndex % width !== 0 &&
                !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
                !squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair')
                ) 
                {pacmanCurrentIndex -= 1;} 
            // check if pacman is in the left exit
            if (squares[pacmanCurrentIndex] === squares[200]) {
                pacmanCurrentIndex = 219;
            }  
            break;
        case 38:
            if (pacmanCurrentIndex - width >= 0 &&
                !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
                !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair')
                )
                {pacmanCurrentIndex -= width;}
            break;
        case 39:
            if (pacmanCurrentIndex % width < width - 1 &&
                !squares[pacmanCurrentIndex +1].classList.contains('wall') &&
                !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair')
                )
                {pacmanCurrentIndex += 1;}
            // check if pacman is in the right exit
            if (squares[pacmanCurrentIndex] === squares[219]) {
                pacmanCurrentIndex = 200;
            } 
            break;
        case 40:
            if (pacmanCurrentIndex + width < width * width &&
                !squares[pacmanCurrentIndex +width].classList.contains('wall') &&
                !squares[pacmanCurrentIndex +width].classList.contains('ghost-lair')
                ) 
                {pacmanCurrentIndex += width;}
            break;
    }
    squares[pacmanCurrentIndex].classList.add('pacman');
    pacDotEaten();
    powerPelletEaten();
    checkGameOver();
    checkGameWin();
}

document.addEventListener('keyup', movePacman);

// what happens when you eat a pac-dot
function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
        score++;
        scoreDisplay.innerHTML = score;
        squares[pacmanCurrentIndex].classList.remove('pac-dot');
    }
}

// what happens when you eat a power-pellet
function powerPelletEaten() {
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
        squares[pacmanCurrentIndex].classList.remove('power-pellet');
        score += 10;
        scoreDisplay.innerHTML = score;
        ghosts.forEach(ghost => ghost.isScared = true);
        setTimeout(unScareGhosts, 10000)
    }
}

// make the ghost stop flashing
function unScareGhosts(){
    ghosts.forEach(ghost => ghost.isScared = false)
}

// create ghosts using Constructors
class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
        this.isScared = false
    }
}

// all my ghosts
ghosts = [
    new Ghost('blinky', 209, 250),
    new Ghost('pinky', 211, 400),
    new Ghost('inky', 208, 300),
    new Ghost('clyde', 210, 500)
]

// draw ghost onto the grid
ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className);
    squares[ghost.currentIndex].classList.add('ghost');
})

// move ALL the ghosts randomly
ghosts.forEach(ghost => moveGhost(ghost));

// move ghosts randomly
function moveGhost(ghost) {
    const directions = [-1, +1, width, -width]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    ghost.timerId = setInterval(function() {
        // if the next square your ghost is going to go in does NOT contain a wall and a ghgost, you can go there
        if (!squares[ghost.currentIndex + direction].classList.contains("wall") && 
        !squares[ghost.currentIndex + direction].classList.contains("ghost")) {
            // you can go here
            // remove all ghost related classes
            squares[ghost.currentIndex].classList.remove(ghost.className, "ghost", "scared-ghost")
            // change the currentIndex to the new safe square
            ghost.currentIndex += direction
            // redraw the ghost in the new safe place
            squares[ghost.currentIndex].classList.add(ghost.className, "ghost")
        } 
        // else find a new direction to try  
        else direction = directions[Math.floor(Math.random() * directions.length)]

        // if the ghost is currently scared
        if (ghost.isScared) {
            squares[ghost.currentIndex].classList.add("scared-ghost")
        }

        // if the ghost is scared and pacman rusn into it
        if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pacman')) {
            squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
            ghost.currentIndex = ghost.startIndex
            score += 100;
            scoreDisplay.innerHTML = score;
            //squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        }
        checkGameOver()
    }, ghost.speed)
    
}

// check for a win
function checkGameWin() {
    if (score > 300) {
        scoreTitle.innerHTML = 'YOU WIN!!!!'
        scoreDisplay.innerHTML = ''
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', movePacman)
    }
}

// check for a game over
function checkGameOver() {
    if(squares[pacmanCurrentIndex].classList.contains('ghost') &&
    !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', movePacman)
        scoreDisplay.innerHTML = ''
        scoreTitle.innerHTML = 'GAME OVER'
    }
}