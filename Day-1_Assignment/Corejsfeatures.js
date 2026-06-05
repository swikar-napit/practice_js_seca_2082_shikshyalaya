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
