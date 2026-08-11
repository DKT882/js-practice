// creatre server only

import express from 'express';
const app=express()
const PORT=3000;


app.get('/',(req,res) => {
    res.send('Hello boy')
})

app.listen(PORT,() => {
    console.log(`Hello boy this is server http://localhost:${3000}/ `)
})