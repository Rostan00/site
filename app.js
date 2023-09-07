const express = require('express')
const app = express()
const Port = 8080

app.get('/home', (req , res)=>{
    res.send("Oi galera!")
})

app.listen(Port , ()=>{
    console.log("SERVIDOR ONLINE TÁ FUNFANDO")
})

