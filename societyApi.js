const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req,res) =>{
    res.send("Welcome to our society")
})
const members = [
    { name: "Rahul", age: 25, wing: "A" },
    { name: "Priya", age: 23, wing: "B" }
];

app.post("/society", (req,res) =>{
    const societyMember = req.body
    if(!societyMember.name || !societyMember.age || !societyMember.wing){
        res.status(400).json({error: "Name, age and wing are required"})
    }else{
        members.push(societyMember)
        res.status(201).json({message: "new society members added successfully", members: societyMember})
    }
})

app.get("/society", (req,res) =>{
    res.send(members)
})

const PORT = 3000
app.listen(PORT, () =>{
    console.log("server is running on port", PORT)
})