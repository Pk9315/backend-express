const express = require("express")
const app = express()

app.use(express.json())

// 1. Write a GET route "/" which sends a message "Hello, Express server.". Test your API with Postman.
app.get("/", (req,res) =>{
    res.send("Hello, express server")
})
// 2. Write a POST route "/books" which sends a new book into the pre-defined books array. 
// Send an error message in case any of the data is missing in the request body. Test your API with Postman.
const books = [

  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },

  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }

];
app.post("/books", (req,res) =>{
    const newBooks = req.body
    if(!newBooks.title || !newBooks.author || !newBooks.year){
        res.status(400).json({error: "title, author and year are required"})
    }else{
        books.push(newBooks)
        res.status(201).json({message: "books are added successfully: ", books: newBooks})
    }
    
})
// 3. Write a GET route "/books" which sends the books array in response. Test your API with Postman.
app.get("/books", (req,res) => {
    res.send(books)
})

// 4. Write a POST route "/todos" which sends a new todo into the pre-defined todos array. 
// Send an error message in case any of the data is missing in the request body. Test your API with Postman.
const todos = [

  { id: 1, title: 'Water the plants', day: 'Saturday' },

];
app.post("/todos", (req,res) =>{
    const newTodos = req.body
    if(!newTodos.title || !newTodos.day){
        res.status(400).json({error: "title and day are required"})
    }else{
        todos.push(newTodos)
        res.status(201).json({message: "Todos added successfully: ", todos: newTodos})
    }

})
app.get("/todos", (req,res) => {
    res.send(todos)
})
const PORT = 3000
app.listen(PORT, () => {
    console.log("Server is running on", PORT)
})