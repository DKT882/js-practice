import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors";

const app=express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"})) // this is middleware to parse the json and the max limit of the json is 16kb only. 16kb restrict request body size.
app.use(express.urlencoded({extended:true,limit:"16kb"})) // this is also a middleware to parse URL-encoded form data. extended: true allows richer/nested structures.
app.use(cookieParser()) // This registers cookie parsing middleware.
app.use(express.static("public"))// files inside public mekes static resourse.



// importing routers here
import userRouter from "./routes/user.route.js";

//routes declaration
app.use('/api/v1/user',userRouter)

export {app}
