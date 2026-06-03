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
let fruuits=["Apple", "Banana", "Orange"]

