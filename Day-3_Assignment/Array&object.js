//`1
let colors = ["Red", "Blue", "Green", "Yellow", "Purple"]
console.log("Colors : ", colors[2])

// 2
let book={
    title : "The Great Gatsby",
    author : "F. Scott Fitzgerald",
    pages : 180,
    publishedYear : 1925
}

// 3
book.isRead = true
console.log("after update: ", book)

// 4 
let students = [
  { name: "Saksham Shrestha", grade: "A" },
  { name: "Swikar Napit",     grade: "B" },
  { name: "Udaya Bajracharya",   grade: "C" },
]

// 5
let company = {
    name:"Decor Decorations",
    location:"Jagati,Bhaktapur",
    employees: ["Saksham Shrestha", "Swikar Napit", "Udaya Bajracharya"]
}

// 6
let numbers = [10, 20, 30]
let newArr =numbers.map(n => n+5)
console.log("numbers: ", numbers)
console.log("newArr: ", newArr)

//7
let car={
    brand: "Toyota",
    model: "Camry",
    year: 2020,
}
let updatedCar = {...car, color: "Red"}
console.log("car: ", car)
console.log("updatedCar: ", updatedCar)

//8
let shoppingList = ["Milk", "Bread", "Eggs"]
let newshoppingList = [...shoppingList, "Butter", "Cheese"]
console.log("shoppingList: ", shoppingList)
console.log("newshoppingList: ", newshoppingList)

 // 9
 let profile = {
    name: "Saksham Shrestha",
    age: 22,
    address :{
        city: "Bhaktapur",
        country: "Nepal"
    }
}

// 10
let products =[
    {id:1, name: "Phone", price: 500},
    {id:2, name: "Laptop", price: 1000},
    {id:3, name: "Tablet", price: 300}
]
let productNames = products.map(({ name,price }) => ({ name, price }));
console.log(productNames)
console.log(products)