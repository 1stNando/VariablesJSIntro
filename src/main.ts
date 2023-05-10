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

// const aboutMe = {
//   fullName: 'Fernando J.V. Aguilar',
//   luckyNumber: 16,
//   favoriteMovie: 'Avatar, Everything Everywhere All at Once, Nope, RRR',
// }

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

// Part two of Adventure mode level assignment. USING ARRAYS[].

// Place these numbers into a properly formatted array named numbers
const numbers: number[] = [
  11252, 25271, 21007, 49113, 17200, 19838, 44281, 46311, 31744, 25503, 48760,
  13862, 26198, 19809, 12124, 46484, 12539, 39975, 44560, 32154, 24258, 19183,
  49208, 41540, 43244, 17424, 49966, 47242, 35065, 12900, 31331, 11709, 16979,
  28144, 22800, 46516, 16680, 14737, 46163, 34541, 15961, 21350, 44157, 35187,
  42680, 41930, 11773, 39341, 44559, 30009, 31665, 19187, 34696, 36157, 28121,
  46747, 30071, 31900, 42122, 38908, 46072, 45519, 29077, 44762, 49562, 13998,
  27061, 27422, 26086, 35299, 47936, 46805, 13741, 22484, 48992, 38349, 39205,
  45002, 35619, 29813, 23564, 21927, 40115, 15595, 28468, 43315, 42317, 34206,
  36386, 32901, 44442, 23292, 35034, 43560, 38008, 26723, 16976, 49696, 47870,
  14226,
]

// Iterations through the array with a  For loop
for (let index = 0; index < numbers.length; index++) {
  let smallest = Math.min.apply(Math, numbers)
  console.log(`Smallest # is ${smallest}`)
}
for (let index = 0; index < numbers.length; index++) {
  let largest = Math.max.apply(Math, numbers)
  console.log(`Largest # is ${largest}`)
}

// Find the sum of all the numbers in the array and place the answer in a variable named arraySum
let arraySum = 0
for (let index = 0; index < numbers.length; index++) {
  arraySum += numbers[index]
}
console.log(`The sum of all numbers in the array is ${arraySum}`)

// Find the average of all the numbers in the array and place the answer in a variable named average
var total = 0
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i]
}
let average = total / numbers.length
console.log(`The calculated average of this array is equal to ${average}`)

// Create an object called "stats" that stores the math variables from above.
const stats = {
  smallestValue: smallest,
  largestValue: largest,
  sum: arraySum,
  averageArray: average,
}
