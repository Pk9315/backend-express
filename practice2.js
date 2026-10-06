const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req,res) =>{
    res.send("Hello Express server")
})

app.get("/", (req,res) =>{
    res.send("Hello, Express Server")
})

const books = [

  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },

  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }

];

app.post("/books", (req,res) =>{
    const newBooks = req.body
    if(!newBooks.title || !newBooks.author || !newBooks.year){
        res.status(400).json({error: "title, author and year are required"})
    }else{
        res.status(200).json({message: "title,contact and year added"})
        books.push(newBooks)
    }
})

app.get("/books", (req,res) =>{
    res.send(books)
})

const students = [
    { name: "Rahul", age: 20 },
    { name: "Priya", age: 21 }
]
app.post("/student", (req,res) =>{
    const newStudent = req.body
    if(!newStudent.name || !newStudent.age || newStudent.age <= 0){
        res.status(400).json({error: "name and age are required"})
    }else{
         students.push(newStudent)
        res.status(201).json({message: "name and age added successfully", students:newStudent})
       
    }
})

const book= [
    {title: "Ret ki machli", author: "Ramakant bharti"},
    {title: "gunhao ke devta", author: "dharamveer bharti"},
]
app.post("/booksDetils", (req,res) =>{
    const booksInfo = req.body
    if(!booksInfo.title || !booksInfo.author){
        res.status(400).json({error: "title and author are required"})
    }else{
        book.push(booksInfo)
        res.status(201).json({message: "title and author added successfully", book: booksInfo})
    }
})

// Create a POST route /employees that receives a new employee.
const employee = [
    {name: "Rohit", department: "Logistic management", salary: 50000},
    {name: "Vijay", department: "Engineering", salary: 20000},
]
app.post("/employees", (req,res) =>{
    const newEmployee = req.body
    if(!newEmployee.name){
        res.status(400).json({error: "name is required"})
    }else if(!newEmployee.department){
        res.status(400).json({error: "department is required"})
    }else if(!newEmployee.salary){
        res.status(400).json({error: "Salary is required"})
    }else{
        employee.push(newEmployee)
        res.status(201).json({message: "name, department and salary required", employee: newEmployee})
    }

})

// Create a POST route /courses to add a new course.
const course = [
    {name: "Backend Development", duration: "6 months"},
    {name: "frontend Development", duration: "5 months"},
    {name: "Cyber Security", duration: "6 months"},
]
app.post("/courses", (req,res) =>{
    const newCourse = req.body
    if(!newCourse.name || !newCourse.duration){
        res.status(400).json({error: "name and duration required"})
    }else{
        course.push(newCourse)
        res.status(201).json({message: "name and duration added successfully", course:newCourse})
    }
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () =>{
    console.log("Server is running the Port", PORT)
})