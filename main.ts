import './style.css'

//Practice Creating Variables
let numberOfCupsOfCoffee = 4

const fullName = 'Fernando Aguilar'

console.log(fullName, numberOfCupsOfCoffee)

const aboutMe = {
  fullName: 'Fernando J.V. Aguilar',
  luckyNumber: 16,
  favoriteMovie: 'Avatar, Everything Everywhere All at Once, Nope, RRR',
}

function greeting() {
  return 'Hello ' + userName + '!'
}

//Practice Getting Input From the User
const userName = window.prompt('What is your user name?')
console.log(greeting)

//Converting String Input Into Numbers
console.log('Now let me ask you to think of two numbers please. ')
const numberOne = window.prompt('Can you give me the first number ')
const numberTwo = window.prompt('Now whats the second number? ')
const firstOperand = new Number(numberOne)
const secondOperand = new Number(numberTwo)

//Doing Math
