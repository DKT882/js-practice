import express from 'express';
import connectDB from './db.js'
const app=express()

const port=3000

app.use(express.json())
//connect with db
connectDB()

app.get('/',(req,res) => {
    res.send('i am inside home route')
    console.log('Hello')
})

app.listen(port,() => {
    console.log('server is running')
})