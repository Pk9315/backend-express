const express = require("express")
const app = express()
require("dotenv").config()

app.get("/Hospital", (req,res) =>{
    res.send("All the facilities are available in our Hospital")
})

app.get("/Hotel", (req,res) =>{
    res.send("We have all types of room")
})

const students = [
    { name: "Rahul", age: 21, course: "BCA" },
    { name: "Priya", age: 22, course: "BCA" }
];

app.get("/students", (req,res) =>{
    res.send(students)
})
const PORT = process.env.PORT || 3000


// Create a GET route /status that sends:
app.get("/status", (req,res) =>{
    res.send("Server is running successfully")
})

// Create a GET route /welcome that sends:
app.get("/welcome", (req,res)=>{
    res.send("Welcome Pritam! You are learning Backend.")
})

// Create a GET route /products that sends the complete products data to the client.

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Headphones", price: 3000 }
]

app.get("/products", (req,res) =>{
    res.send(products)
})

// Create a GET route /products/count that sends the number of products available.

const productsCount =  [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Headphones", price: 3000 }
]
app.get("/productsCount", (req,res) =>{
    res.send(productsCount.length)
})
app.listen(PORT, () =>{
    console.log("Server is running on port", PORT)
})