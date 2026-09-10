const express = require("express")
const app = express()
require("dotenv").config()



app.get("/", (req,res) =>{
    res.send("Hello Express!")
})

app.get("/about", (req,res) =>{
    res.send("This is the about page")
})
app.get("/contact",(req,res)=>{
    res.send("Contact us on pritam@gamil.com")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () =>{
    console.log("server is running on port" , PORT)
})