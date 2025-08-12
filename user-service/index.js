const express = require('express')
const app = express()
const prot = 3001

app.use(express.json())

let users = [
    {id:5, nombre:"Luis"},
    {id:7, nombre:"Maria"}
]

app.get('/users', (req,res)=>{
    console.log('Get /users request received')
    res.json(users)    
})

app.post('/users', (req, res)=>{
    const newUser = req.boby
    users.push(newUser)
    console.log('POST /users request received. New user: ', newUser)
    res.status(201).json(newUser)
})

app.listen(port, ()=>{
    console.log(`'Users Service listening at http://localhost:${port}`)
})