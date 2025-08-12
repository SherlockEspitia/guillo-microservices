const express = require('express')
const app = express()
const prot = 3002

app.use(express.json())

let products = [
    {id:5, nombre:"Producto A", precio:500},
    {id:6, nombre:"Producto B", precio:700}
]

app.get('/products', (req, res)=>{
    console.log('GET /products request received')
    res.json(products)
})

app.post('/products', (req, res)=>{
    const newProduct = req.body
    products.push(newProduct)
    console.log('Post /products request received. New product:', newProduct)
    res.status(201).json(newProduct);
})

app.listen(port, ()=>{
    console.log()
})