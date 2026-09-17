const express = require("express")
const app = express()
require("dotenv").config()

app.get("/Hospital", (req,res) =>{
    res.send("All the facilities are available in our Hospital")
})

app.get("/Hotel", (req,res) =>{
    res.send("We have all types of room")
})
const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log("Server is running on port", PORT)
})