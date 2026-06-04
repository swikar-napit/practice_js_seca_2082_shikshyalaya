// 1 "this " inside an object method
let user = {
    name : "Swikar",
    login(){
        console.log("Welcome, " + this.name)
    }

}
user.login()

//2 "This" lsoing context
let button = {
    label :"submit",
    handleclick() {
        console.log("Clicked: " +this.label)
    }
}
//bug : this is lost when detached 
let broken = button.handleclick
try { broken(); } catch(e) { console.log("Broken: " + e.message); }

// Fix: bind preserves context
let fixed = button.handleClick.bind(button)
fixed();

// 3 Module: Export a config

// config.js
let config = {
  API_BASE_URL: "https://api.myapp.com/v1",
  TIMEOUT: 5000
}

// main.js
// import { API_BASE_URL } from "./config.js"
console.log("API base:", config.API_BASE_URL)
console.log("Timeout:", config.TIMEOUT + "ms")


//4 Module: Utility functions
function formatCurrency(amount) {
  return "$" + amount.toFixed(2)
}

function generateRandomId() {
  return "id_" + Math.random().toString(36).slice(2, 9)
}

function getTodayDate() {
  return new Date().toISOString().split("T")[0]
}
console.log(formatCurrency(19.9))
console.log(generateRandomId())
console.log(getTodayDate())

// 5  Class representing a Product
class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  getInfo() {
    return this.name + " — $" + this.price.toFixed(2)
  }
}

const shoe = new Product("Running Shoe", 89.99)
console.log(shoe.getInfo())