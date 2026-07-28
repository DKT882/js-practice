import express from 'express';
import connectDB from './db.js'
import router from './routes/users.js'
// const user=require('./routes/users.js')

const app=express()

const port=3000

app.use(express.json())
app.use('/api',router)
//connect with db
connectDB()

app.get('/',(req,res) => {
    res.send('i am inside home route')
    console.log('Hello')
})

app.listen(port,() => {
    console.log('server is running')
})