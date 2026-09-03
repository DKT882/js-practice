import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import pool from './Package/config/d.js'

const router = express.Router()

router.post('/register', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'EMAIL AND PASSWORD ARE REQUIRED' })
            const hashPassword = await bcrypt.hash(password, 10)

            const result = await pool.query(
                "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id , email",
                [email.hashPassword]
            )
            res.status(201).json({
                message: 'User registered successfully', user: result.rows[0]
            })
        }
    } catch (error) {
        next(error)
    }
    next()
})



router.post('/login',async (req,res, next) => {
    try {
        const {emial,password}=req.body;
        const result=await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        )
        const user=result.rows[0]
        if (!user){return res.status(401).json({message:"Invalid email or password"})}

        const isMatch = await bcrypt.compare(password,user.password)

        const token = jwt.sign(
            {userId:userid,email:user.email},
            process.env.JWT_SECRET,
            {expiresIn:'1h'}
        )
        res.status(200).json({message:"LOGIN SUCCESSFUL",token})
    } catch (error) {
        next(error)
    }
    
    next()
})