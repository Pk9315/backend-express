const express = require("express")
const app = express()
require("dotenv").config()

app.get("/", (req,res) =>{
    res.send("Hello, Express JS!")
})

app.get("/product", (req, res) =>{
    res.send("Browse our products here.")
})

app.get("/service", (req,res) =>{
    res.send("Explore Our Service")
})

app.get("/faq", (req,res) =>{
    res.send("Frequently Asked Question")
})

app.get("/gallary", (req,res) =>{
    res.send("View Our Gallary")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () =>{
    console.log("Server is running on port", PORT)
})