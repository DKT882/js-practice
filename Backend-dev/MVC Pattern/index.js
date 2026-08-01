import express from 'express';
import connectDB from './config/db.js'


const app = express()

const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//connect with db
connectDB()

app.get('/', (req, res) => {
    res.send('The BKND server is started')
    console.log('Hello')
})

app.listen(port, () => {
    console.log(`server is running on port https://localhost/${port}`)
})
