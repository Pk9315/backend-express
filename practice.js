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

app.listen(PORT, () =>{
    console.log("Server is running on port", PORT)
})