const express = require("express")
const app = express()

app.use(express.json())

// 1. Write a GET route "/" which sends a message "Express server.". Test your API with Postman.
app.get("/", (req,res) =>{
    res.send("Express Server")
})
// 2. Write a POST route which updates a movie with id 2, present in the pre-defined movies array. 
// Send an error message, "Movie not found", in case that movie is not found.

const movies = [

  { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },

  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 },

  { id: 3, title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994 }

];

app.post("/movies/:id", (req,res) =>{
    const movieId = parseInt(req.params.id)
    const updatedMoviesData = req.body
    
    const updateToMovie = movies.find(movie => movie.id === movieId)
    if(!updateToMovie){
        res.status(400).json({error: "movies not found"})
    }else{
        if(!updatedMoviesData.title || !updatedMoviesData.director || !updatedMoviesData.year){
            res.status(400).json({error: "title , director and year are required"})
        }else{
            Object.assign(updateToMovie, updatedMoviesData)
            res.status(200).json({message: "movies data updated successfully", movies: updatedMoviesData})
        }
    }
})
// 3. Write a GET route "/movies" which sends the movies array in response. Test your API with Postman.
app.get("/movies", (req,res) =>{
    res.send(movies)
})

// 4. Write a POST route which updates the details of item with id 1, present in the pre-defined items array. 
// Send an error message, "Item not found" in case the item is not present in the array.
const items = [

  { id: 1, itemName: 'Spoon', color: 'Silver', quantity: 8},

  { id: 2, itemName: 'Fork', color: 'Silver', quantity: 8 },

  { id: 3, itemName: 'Plate', color: 'Off-White', quantity: 6 }

];
app.post("/items/:id", (req,res) =>{
    const itemsId = parseInt(req.params.id)
    const updatedItemsData = req.body

    const updateToItems = items.find(item => item.id === itemsId)
    if(!updateToItems){
        res.status(400).json({error: "Itmes not found"})
    }else{
        if(!updatedItemsData.itemName || !updatedItemsData.color || !updatedItemsData.quantity){
            res.status(400).json({error: "itemName , color and quantity are required"})
        }else{
            Object.assign(updateToItems, updatedItemsData)
            res.status(200).json({message: "items data updated successfully", items: updatedItemsData})
        }
    }
})
// 5. Write a GET route "/items" which sends the items array in response. Test your API with Postman.
app.get("/items", (req,res) =>{
    res.send(items)
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () =>{
    console.log("Server is running on port", PORT)
})