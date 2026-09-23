const express = require("express")
const app = express()

app.use(express.json())

// 1. Write a GET route "/" which sends a message "Express server.". Test your API with Postman.
app.get("/", (req,res)=>{
    res.send("Express server")
})

// 2. Write a POST route "/movies" which sends a new movie into the pre-defined movies array. 
// Send an error message in case any of the data is missing in the request body. 
// Test your API with Postman.
const movies = [
  { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 }
];
app.post("/movies", (req,res) =>{
    const newMovies = req.body
    if(!newMovies.title || !newMovies.director || !newMovies.year){
        res.status(400).json({error: "title, director and year are required"})
    }else{
        movies.push(newMovies)
        res.status(201).json({message: "Movies added successfully: ", movies: newMovies})
    }
})

// 3. Write a GET route "/movies" which sends the movies array in response. Test your API with Postman
app.get("/movies", (req,res)=> {
    res.send(movies)
})

// 4. Write a POST route "/items" which sends a new item into the pre-defined items array. 
// Send an error message in case any of the data is missing in the request body.
//  Test your API with Postman.

const items = [

  { id: 1, itemName: 'Spoon', color: 'Silver', quantity: 8},

 { id: 2, itemName: 'Fork', color: 'Silver', quantity: 8 }

];
app.post("/items", (req,res) => {
    const newItems = req.body
    if(!newItems.itemName || !newItems.color || !newItems.quantity){
        res.status(400).json({error: "itemName, color and quantity are required"})
    }else{
        items.push(newItems)
        res.status(201).json({message: "items added successfully: ", items: newItems})
    }
})
// 5. Write a GET route "/items" which sends the items array in response. Test your API with Postman.
app.get("/items", (req,res) => {
    res.send(items)
})
const PORT = 3000
app.listen(PORT, () =>{
    console.log("Server is running on", PORT)
})