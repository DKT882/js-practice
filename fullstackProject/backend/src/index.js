// require('dotenv').config({path: './env'});
import dotenv from 'dotenv';
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import { DB_NAME } from "./content.js";

dotenv.config()
await connectDB()










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