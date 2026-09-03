import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import pool from './Package/config/d.js'

const router = express.Router()

router.post('/register', async (req, res) => {
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
})