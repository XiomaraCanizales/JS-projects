const foodDisplay = document.getElementById('food')
const userInput = document.getElementById('num-input')

const drinkSelection = document.getElementById('drinkSelection')

const btn = document.getElementById('btn')

// MENU
const sides = [
    'Mashed Potatoes with Garlic and Butter',
    'Roasted Brussels Sprouts with Balsamic Glaze and Pecans',
    'Salad with Cranberries,Walnuts, and Goat Cheese',
    'Honey-Glazed Carrots with Toasted Walnuts',
    'Green Bean Casserole with Crispy Onion Rings',
    'Roasted Brussels Sprouts with Bacon and Cranberries',
    'Scalloped Potatoes with Gruyere Cheese',
    'Roasted Vegetables'
]

const drinks = {
    nonAlcoholic: {
        op1: 'Sparkling apple cider with cinnamon sticks',
        op2: 'Cranberry juice with rosemary sprig',
        op3: 'Spiced hot chocolate'
    },
    alcoholic: {
        op1: 'Mulled wine',
        op2: 'Eggnog',
        op3: 'Sparkling wine'
    }
}

const mainCourseChoices = {
    // 1 or 2 people
    option1: {
        meat: 'Herb-Roasted Chicken Breast',
        seafood: 'Salmon with Lemon Dill Sauce',
        vegetarian: 'Vegetable Wellington with Lentil and Mushroom Filling'
    },
    // 3 to 5
    option2: {
        meat: 'Herb-Roasted Chicken with Gravy',
        seafood: 'Pomegranate and Orange Glazed Salmon',
        vegetarian: 'Stuffed Butternut Squash with Quinoa, Cranberries, and Pecans'
    },
    // 6 to 12
    option3: {
        meat: 'Herb-Roasted Chicken with Gravy',
        seafood: 'Island-Style Seared Scallops with Mango Salsa',
        vegetarian: 'Vegan Shepherd\'s Pie with Lentil and Vegetable Filling'
    },
    // 13 to 30
    option4: {
        meat: 'Traditional Roast Turkey',
        seafood: 'Baked Stuffed Lobster with Shrimp',
        vegetarian: 'Vegan Turkey Roast'
    }
}

// check for user's input
function getDietaryOption() {
    const dietaryOptions = document.getElementsByName('dietaryOption')
    for (const option of dietaryOptions) {
        if (option.checked) {
            return option.id
        }
    }
    return 'meat'
}

// pick main course
 function addMainCourse() {
    const numGuests = userInput.value
    const diet = getDietaryOption()

    let option
    if (!numGuests) {
        alert ('add number of guests')
    }
    else if (numGuests <= 2) option = 'option1'
    else if (numGuests <= 5) option = 'option2'
    else if (numGuests <= 12) option = 'option3'
    else option = 'option4'

    return mainCourseChoices[option][diet]
}

// add side dish
function addSide() {
    const randomSide = sides[Math.floor(Math.random() * sides.length)]
    return randomSide
}

// get the drinks
function addDrinks() {
    let category
    if (drinkSelection.checked) {
       category = 'nonAlcoholic'
    } else {
        category = 'alcoholic'
    }

    const options = drinks[category]
    const randomKey = Object.keys(options)[Math.floor(Math.random() * 
                      Object.keys(options).length)]
    return options[randomKey]
}

// select options after click
btn.addEventListener('click', pickMenu)
btn.addEventListener('click', restValues)


function pickMenu() {
    foodDisplay.textContent = `Main Course: ${addMainCourse()} \n Side Dish: ${addSide()} \n Drink: ${addDrinks()}`
}

function restValues() {
    if (drinkSelection.checked) {
        drinkSelection.checked = false
    }
    const dietaryOptions = document.getElementsByName('dietaryOption')
    for (const option of dietaryOptions) {
        option.checked = false
    }
}