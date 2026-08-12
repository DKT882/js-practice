// require('dotenv').config({path: './env'});  // old version
import dotenv from 'dotenv'; 
import express from "express";
const app = express()
dotenv.config()


app.get('/', (req, res) => {
    res.send("Hello")
})
app.get('/users', (req, res) => {
    res.send("users")
})
app.get('/skills', (req, res) => {
    res.send("skills")
})
app.get('/projects', (req, res) => {
    res.send("projects")
})


app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})