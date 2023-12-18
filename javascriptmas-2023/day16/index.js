const niceList = document.getElementById('nice-list')
const naughtyList = document.getElementById('naughty-list')
const btn = document.getElementById('btn')
const addBtn = document.getElementById('add-person')

const sorteesArr = [
    {
        name: 'David',
        hasBeenGood: false
    },
    {
        name: 'Del',
        hasBeenGood: true
    },
    {
        name: 'Valerie',
        hasBeenGood: false
    },
    {
        name: 'Astrid',
        hasBeenGood: true
    }
]

btn.addEventListener('click', updateLists)
addBtn.addEventListener('click', addPerson)

// 1. add new person
function addPerson() {
    const newPerson = document.getElementById('person-name').value
    const radioBtns = document.getElementsByName('has-been-good')
    let niceORnaughty
    radioBtns.forEach(btn => {
        if (btn.checked) {
            niceORnaughty = btn.value === 'true'
        }
    })
    const person = {
        name: newPerson,
        hasBeenGood: niceORnaughty
    }
    sorteesArr.push(person)
    document.getElementById('person-name').value = ''
    updateLists()
}
// 2. update list
function updateLists() {
    // clear existing content
    niceList.innerHTML = ''
    naughtyList.innerHTML = ''
    // sort and adding to DOM
    for (const person of sorteesArr) {
        const listItem = document.createElement('li')
        listItem.textContent = person.name
        if (person.hasBeenGood) {
            niceList.appendChild(listItem)
        } else {
            naughtyList.appendChild(listItem)
        }
    }
}
