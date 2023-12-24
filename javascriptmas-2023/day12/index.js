const atoz = document.getElementById('atoz')
const ztoa = document.getElementById('ztoa')

const xmasGifts = ['guitar 🎸', 'skates ⛸️', 'bear 🧸', 'magnet 🧲', 'laptop 💻', 'games console 🎮 ', 'jewellery 💍', 'kite 🪁']

const sortedAZ = xmasGifts.sort()
sortedAZ.forEach(item => {
    const newItem = document.createElement('li')
    newItem.textContent = item
    atoz.append(newItem)
})


const sortedZA = xmasGifts.reverse()
sortedZA.forEach(item => {
    const newItem = document.createElement('li')
    newItem.textContent = item
    ztoa.append(newItem)
})