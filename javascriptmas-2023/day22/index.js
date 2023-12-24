let people = JSON.parse(localStorage.getItem('people')) || []

const inputField= document.getElementById('input-field')
const addButton = document.getElementById('add-button')
const peopleList = document.getElementById('people-list')

addButton.addEventListener('click', () => {
    let inputValue = inputField.value

    if (inputValue) {
        people.push(inputValue)
        localStorage.setItem('people', JSON.stringify(people))

        clearInputField()
        renderList(people)
    }
})

function renderList(array) {
    clearPeopleList()

    for (let i = 0; i < array.length; i++) {
        let currentPerson = array[i]

        appendPersoToPeopleList(currentPerson)
    }
}

function clearPeopleList() {
    peopleList.innerHTML = ''
}

function clearInputField() {
    inputField.value = ''
}

function appendPersoToPeopleList(person) {
    let newPerson = document.createElement('li')
    
    newPerson.textContent = person
    newPerson.addEventListener('dblclick', function() {
        let index = people.indexOf(person)
        people.splice(index, 1)
        localStorage.setItem('people', JSON.stringify(people))

        renderList(people)
    })
    peopleList.append(newPerson)
}

renderList(people)