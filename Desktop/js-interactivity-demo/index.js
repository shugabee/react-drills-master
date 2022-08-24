// console.log('Hello world!')

let count = 0

const counterText = document.querySelector('#counter')

const plusBtn = document.querySelector('#plus-btn')
const minusBtn = document.querySelector('#minus-btn')
const resetBtn = document.querySelector('#reset-btn')

function setCounterDisplay() {
    counterText.textContent = count
}

function decrease() {
    count--
    setCounterDisplay()
}

plusBtn.addEventListener('click', () => {
    count++
    setCounterDisplay()
})

resetBtn.addEventListener('click', () => {
    count = 0
    setCounterDisplay()
    alert('you reset the count')
})

minusBtn.addEventListener('click', decrease)

/////////////////////////////////////////////////////////


// const fbBtn = document.querySelector('.theme-buttons')

// facebookBtn.addEventListener('click', (e) => {
//     console.log(e.target)
// })

const themeBtns = document.querySelectorAll('.theme-buttons')
console.log(themeBtns)

function selectTheme(e) {
    const theme = e.target.textContent

    document.querySelector('body').className = theme
    document.querySelector('main').className = theme

    const buttons = document.querySelectorAll('button')

    for ( let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme
    }
}

// fbBtn.addEventListener('click', selectTheme)

for (let i = 0; i < themeBtns.length; i++) {
    themeBtns[i].addEventListener('click', selectTheme)
}


/////////////////////////////////////////////////////////

const inputField = document.querySelector('#food-input')
const foodBtn = document.querySelector('#food-btn')
const foodList = document.querySelector('#food-list')

let newFood = ''

function newFoodHandler(e) {
    newFood = e.target.value
    console.log(newFood)
}

function addNewFood() {
    let newPara = document.createElement('p')
    newPara.textContent = newFood

    foodList.appendChild(newPara)

    inputField.value = ''
}

inputField.addEventListener('change', newFoodHandler)
foodBtn.addEventListener('click', addNewFood)
