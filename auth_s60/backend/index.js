import express from 'express'
import cors from 'cors'
import authRoutes from './authRoutes.js'
import {requireAuth} from './Package/middleware/requireAuth.js'

const app=express();
app.use(cors())
app.use(express.json())
app.use('./api/auth',authRoutes)

app.get('./api/protected',requireAuth,(req,res)=>{
    res.status(200).json({message:'YOU have accessed a protected route'})
    user:req.user
})

app.use((err,req,res,next) => {
    console.error(err.stack)
    res.status(500).json({message:'internal server error'})
})

app.listen(3000,() => {
    console.log('server is running on 3000')
})