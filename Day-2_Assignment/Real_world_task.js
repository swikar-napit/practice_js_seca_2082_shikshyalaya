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
try { broken() } catch(e) { console.log("Broken: " + e.message)}

// Fix: bind preserves context
let fixed = button.handleclick.bind(button)
fixed()

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
  return "Rs" + amount.toFixed(2)
}

function generateRandomId() {
  return "id_" + Math.random().toString(36).slice(2, 9)
}

function getTodayDate() {
  return new Date().toISOString().split("T")[0]
}
console.log(formatCurrency(100))
console.log(generateRandomId())
console.log(getTodayDate())

// 5  Class representing a Product
class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  getInfo() {
    return this.name + " — Rs" + this.price.toFixed(2)
  }
}

const shoe = new Product("Running Shoe", 20000)
console.log(shoe.getInfo())

//6 Inheritance example
class product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
  getInfo() {
    return this.name + " — Rs" + this.price.toFixed(2)
  }
}

class Foodproduct extends product {
  constructor(name, price, expiry) {
    super(name, price)
    this.expiry = expiry
  }
  getInfo() {
    return super.getInfo() + " (expires: " + this.expiry + ")"
  }
}

let milk = new Foodproduct("Whole Milk", 120, "2025-07-01")
console.log(milk.getInfo())

//Promise for fetching settings
function getAppSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ theme: "dark", language: "en" })
    }, 2000)
  })
}

getAppSettings().then((settings) => {
  console.log("Theme:", settings.theme)
  console.log("Language:", settings.language)
})

//8 
function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Swikar" },
        { id: 2, name: "Pujan" },
        { id: 3, name: "udaya" }
      ])
    }, 1000)
  })
}

async function main() {
  let users = await fetchUsers()
  users.forEach(u => console.log(u.id + ": " + u.name))
}

main()

//9  try/catch handling API errors
function fetchUsersWithTimeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve([{ id: 1, name: "Swikar" }])
      } else {
        reject(new Error("Network timeout"))
      }
    }, 1000)
  })
}

async function hello() {
  try {
    let users = await fetchUsersWithTimeout()
    console.log("Loaded " + users.length + " user(s)")
  } catch (err) {
    console.log("Something went wrong: " + err.message)
  }
}

hello()

//10 Combine everything
// Config
const APP_NAME = "Student Management System"

// Utility Function
function formatStudent(student) {
  return student.id + " - " + student.name
}

// Class
class Student {
  constructor(id, name) {
    this.id = id
    this.name = name
  }

  getDetails() {
    return "Student: " + this.name + " (ID: " + this.id + ")"
  }
}

// Async Mock Fetch
function fetchStudents() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        new Student(1, "Swikar"),
        new Student(2, "Pujan"),
        new Student(3, "Udaya")
      ])
    }, 1000)
  })
}

// Main
async function runStudentApp() {
  console.log("App:", APP_NAME)

  const students = await fetchStudents()

  students.forEach(student => {
    console.log(formatStudent(student))
    console.log(student.getDetails())
  })
}

runStudentApp()