const express = require("express")
const app = express()

app.use(express.json())

const cars = [
    {
        id: 1,
        make: "Toyota",
        model: "carmy",
        years: 2024
    }
]
app.get("/", (req,res)=>{
    res.send("Hello, Express")
})

app.post("/cars", (req, res) =>{
    const newCars = req.body
    if(!newCars.make || !newCars.model || !newCars.years){
        res.status(400).json({error: "Make, Model and year are required"})
    }else{
        cars.push(newCars)
        res.status(201).json({message: "Cars added successfully: ", cars: newCars})
    }
})

app.get("/cars", (req, res) =>{
    res.send(cars)
})

const PORT = 3000
app.listen(PORT, () =>{
    console.log("server is running on ", PORT)
})