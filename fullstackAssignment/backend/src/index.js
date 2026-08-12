// require('dotenv').config({path: './env'});  // old version
import dotenv from 'dotenv';
import cors from 'cors'
import express from "express";
import usersRouter  from "./routes/users.routes.js"
import skillsRouter  from "./routes/skills.routes.js"
import projectsRouter  from "./routes/projects.routes.js"



const app = express()
dotenv.config()
// app.use(cors())
app.use(cors({ origin: "http://localhost:5173" })); // cores is useable in this localhost link
app.use(express.json());
// CORS and express.json() are a middlewares and .use also a middleware

//routers using express router
app.use('/api',usersRouter)
app.use('/api',skillsRouter)
app.use('/api',projectsRouter)



app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})