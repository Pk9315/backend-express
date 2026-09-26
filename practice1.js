const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req,res) =>{
    res.send("Welcome to our family friendly socity")
})
const cherryRwaApartment = [
    {name: "Omprakash", phoneNumber: +917548775535, wing: "A", designation: "President"},
    {name: "Lokesh Sharma", phoneNumber: +917543674455, wing: "A", designation: "Secretary"},
    {name: "Mamta Mittal", phoneNumber: +917543694428, wing: "B", designation: "Treasurer"},
    {name: "Sonu Jha", phoneNumber: +918564257845, Wing: "B", designation: "Executive Members"},
]
app.post("/cherryApartment", (req,res) =>{
    const newData = req.body
    if(!newData.name || !newData.phoneNumber || !newData.wing || !newData.designation){
        res.status(400).json({error: "name, phoneNumber, wing and designation are required"})
    }else{
        cherryRwaApartment.push(newData)
        res.status(201).json({message: "RWA new member added successfully", cherryRwaApartment: newData})
        
    }
})

app.get("/cherryApartment", (req, res)=> {
    res.send(cherryRwaApartment)
})

const PORT = 3000
app.listen(PORT, () =>{
    console.log("Server is runnning ", PORT)
})