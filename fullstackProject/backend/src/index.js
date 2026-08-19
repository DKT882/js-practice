// require('dotenv').config({path: './env'});
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config()
const PORT=process.env.PORT||8000
// await connectDB() use await or .then any one ether await async or .then
// if use await then use tryCatch syntax
connectDB()
.then(() => {
    app.listen(PORT,() => {
        console.log(`Server is running on port ${PORT}`)
    })
})
.catch((err) => {
    console.log(`MongoDB connection error : ${err}`)
})










/*


import express from 'express';
import mongoose from 'mongoose'
const app=express()
import { DB_NAME } from './content';

;(async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",() => {
            console.log("ERR: ", error)
            throw error
        })
        app.listen(process.env.PORT,() => {
            console.log('the app is running')
        })
    } catch (error) {
        console.log("ERROR: ",error)
        throw error
    }
})()


*/
