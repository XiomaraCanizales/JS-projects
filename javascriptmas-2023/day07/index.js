const myWishlistContainer = document.querySelector('.my-wishlist-container')
const userWishListContainer = document.querySelector('.user-wishlist-container')
const addBtn = document.getElementById('add-btn')

// my wishlist
const wishlist = [
    'Macbook Air M2',
    'A bookcase full of books',
    'A year supply Matcha',
    'Multiple Lego sets',
    'A pink thumbler',
    'Loungefly Disney Marie Aristocats White Backpack',
]

// display on HTML
wishlist.forEach(item => {
    const listItem = document.createElement('li')
    listItem.textContent = item
    myWishlistContainer.appendChild(listItem)
})

// user wishlist
let userWishList = []
function collectInput() {
    const userInput = document.getElementById('user-input').value
    if (userInput === '') {
        alert('Please enter some input.')
        return
    }
    userWishList.push(userInput)

    // resets input
    document.getElementById("user-input").value = ''

    const listItem = document.createElement('li')
    listItem.textContent = userInput
    userWishListContainer.appendChild(listItem)
}

addBtn.addEventListener('click', () => {
    collectInput()
})
