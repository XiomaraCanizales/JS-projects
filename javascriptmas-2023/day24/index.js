window.onload = function() {
    const redLights = document.querySelectorAll('.lights.red')
    const blueLights = document.querySelectorAll('.lights.blue')

    setInterval(function() {
        redLights.forEach(ligth => ligth.classList.toggle('lights-on'))
    }, 600)

    setInterval(function() {
        blueLights.forEach(ligth => ligth.classList.toggle('lights-on'))
    }, 800)
}
