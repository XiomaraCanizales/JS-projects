const player = document.getElementById('player')

function playSong(id) {
    player.setAttribute('src', `https://www.youtube.com/embed/${id}?autoplay=1` )
}

// for some reason it doesn't work on my side but it does on scrimba