// HTML elements
const elf = document.getElementById('elf')
const container = document.querySelector('.elf-hangout-zone')
const btn = document.getElementById('btn')
const toolsBtn = document.getElementById('tools')

// elves tools
const tools = ['🧰', '🔨', '🔧', '🪚', '⛏️', '🪓', '🔩', '🎨', '🖍️', '🖌️', '🧵', '🪡', '🎁', '🪄', '🧸', '✨']

// click action
btn.addEventListener('click', duplicateElf)
toolsBtn.addEventListener('click', addTools)

// function to d
function duplicateElf() {
    const allElves = elf.parentNode.children
   
    if (allElves.length + 1 < 100) {
        const newElf = elf.cloneNode(true)
        //newElf.id += '-clone' + elfCount
        elf.parentNode.appendChild(newElf)
    } else {
        alert('Only 100 elves allowed')
    }
}

// adding tools
function addTools() {
    const randomTool = tools[Math.floor(Math.random() * tools.length)]
    container.append(randomTool)
}