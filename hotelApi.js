const express = require("express")
const app = express()

app.use(express.json())

const hotels = [
    { name: "Hotel Taj", city: "Delhi", rooms: 50 },
    { name: "Hotel Pearl", city: "Mumbai", rooms: 30 }
];

app.get("/", (req,res) =>{
    res.send("Welcome to our website to find good hotel, we are providing affordable hotel")
})

app.post("/hotels", (req, res) =>{
    const addNewHotel = req.body
    if(!addNewHotel.name || !addNewHotel.city || addNewHotel.rooms === undefined  || addNewHotel.rooms <= 0){
        res.status(400).json({error: "name, city and rooms are required"})
    }else{
        hotels.push(addNewHotel)
        res.status(201).json({message: "new hotel added in the list successfully", hotels: addNewHotel})
    }
})

app.get("/hotels", (req,res) =>{
    res.send(hotels)
})

const PORT = 3000
app.listen(PORT, () =>{
    console.log("Server is running on port", PORT)
})