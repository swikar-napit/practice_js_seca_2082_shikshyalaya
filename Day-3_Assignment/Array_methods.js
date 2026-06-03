// 1 use of Map FUnction
let numbers=[1,2,3,4,5]
let newNumbers= numbers.map(n=>n*2)
console.log("numbers: ", numbers)
console.log("newNumbers: ", newNumbers)

// 2 use of filter Function
let number=[1,2,3,4,5,6]
let evennumber=number.filter(n=>n%2==0)
console.log("number: ", number)
console.log("evennumber: ", evennumber)

// 3 Use of reduce Function
let num=[10,20,30,40]
let sum=num.reduce((acc,curr)=>acc+curr,0)
console.log("num: ", num)
console.log("sum: ", sum)

// 4 Use of find Function
let users=[
    {id:1, name:"Saksham Shrestha", age:22},
    {id:2, name:"Swikar Napit", age:19},
    {id:3, name:"Udaya Bajracharya", age:14}
]

let adult = users.find(user=> user.age>18);
console.log(adult)

// 5 Use of forEach Function
let fruits=["Apple", "Banana", "Orange"]
fruits.forEach((fruit,index) => {
    console.log(`${index}:${fruit}`)
})

// 6 use of map function 
let user = [
    {name:"Swikar", age: 19},
    {name:"Udaya", age: 22},
    {name:"Laxman", age: 25},
]    
let names = user.map(user => user.name)
console.log(names)

// 7 Use of Filter
let products = [
  { name: "Pen", price: 90 },
  { name: "Laptop", price: 29999 },
  { name: "Book", price: 300 },
  { name: "Headphones", price: 1500 },
];

let affordable = products.filter(product => product.price < 10000);
console.log(affordable);

//8 use of reduce 
let nums = [3, 67, 12, 89, 45];

const max = nums.reduce((highest, current) => {
  return current > highest ? current : highest;
}, numbers[0]);

console.log(max);

// 9 use of map and filter together
let usr = [
  { name: "Alice", age: 16 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 25 },
];

let adultNames = usr
  .filter(usr => usr.age >= 18)
  .map(usr => usr.name.toUpperCase());

console.log(adultNames);

//10 Use OF foreach
let items = ["Home", "About", "Services", "Contact"];

let html = "<ul>\n";
items.forEach(item => {
  html += `  <li>${item}</li>\n`;
});
html += "</ul>";

console.log(html);