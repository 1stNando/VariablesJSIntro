import './style.css'
// import typescriptLogo from './typescript.svg'
// import { setupCounter } from './counter'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

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
const firstOperand = Number(numberOne)
const secondOperand = Number(numberTwo)

//Doing Math
let sum = firstOperand + secondOperand
let difference = firstOperand - secondOperand
let product = firstOperand * secondOperand
let quotient = firstOperand / secondOperand
let remainder = firstOperand % secondOperand

console.log(`The sum of ${numberOne} and ${numberTwo} is ${sum} `)
console.log(`The difference of ${numberOne} and ${numberTwo} is ${difference} `)
console.log(`The product of ${numberOne} and ${numberTwo} is ${product} `)
console.log(`The quotient of ${numberOne} and ${numberTwo} is ${quotient} `)
console.log(
  `The remainder when you divide ${numberOne} and ${numberTwo} is ${remainder} `
)
