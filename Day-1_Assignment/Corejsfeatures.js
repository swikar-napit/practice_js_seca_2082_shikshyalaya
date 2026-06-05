// 1 Variables and Template Literals
let first_name = "Swikar"
let last_name = "Napit"

let greet = `Hello, my name is ${first_name} ${last_name}!`
console.log(greet)

//2 let and const Scope
  let blockLet = "I am inside with let";
  const blockConst = "I am inside with const";

// Both of these will throw a ReferenceError because they don't exist outside the block
try {
  console.log(blockLet)
} catch (e) {
  console.log("Error accessing let outside block:", e.message)
}

try {
  console.log(blockConst)
} catch (e) {
  console.log("Error accessing const outside block:", e.message)
}

//3 Arrow Function Simple
let gret = (name) => `Hello, ${name}!`

console.log(gret("Swikar"))

//4 Arrow Function with Multiple Parameters
let multiply = (num1, num2) => num1 * num2

console.log(multiply(5, 6))

//5 Object Destructuring
let user = {
  name: "Udaya",
  age: 22,
  country: "Nepal"
}

const { name, country } = user
console.log(name)
console.log(country)

//6 Array Destructuring
let numbers = [10, 20, 30, 40]

let [first, second] = numbers
console.log(first)
console.log(second)

//7 Default Parameters
function sayHello(name = "Guest") {
  console.log(`Hello, ${name}!`)
}

sayHello()
sayHello("Pujan")

//8 Rest Operator (Sum of Numbers)
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0)
}

console.log(sumAll(1, 2, 3, 4))

//9 Spread Operator with Arrays
let arr1 = [1, 2, 3]
let arr2 = [4, 5]

let mergedArray = [...arr1, ...arr2]
console.log(mergedArray)

//10 Merge and Destructure Objects
let obj1 = { a: 1, b: 2 }
let obj2 = { c: 3, d: 4 }

// Merge using spread operator
const mergedObj = { ...obj1, ...obj2 }

// Destructure from the merged object
const { a, d } = mergedObj

console.log("Merged Object:", mergedObj)
console.log("a:", a)             
console.log("d:", d)                 