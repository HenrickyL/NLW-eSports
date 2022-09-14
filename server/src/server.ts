import express from "express";

const app = express()

app.get('/games',(req,res)=>{
    return res.status(200).json([])
})

app.post('/ads',(req,res)=>{
    return res.status(201).json([])
})

app.get('/games/:id/ads',(req, res)=>{
    return res.status(200).json([
        {id: 1, name:'anuncio 1'},
        {id: 2, name:'anuncio 2'},
        {id: 3, name:'anuncio 3'}
    ])
})
const port = 3333

app.listen(port,()=>{
    console.log(`run in port ${port}`)
})