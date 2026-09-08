import express from 'express';
import cors from 'cors';
import pool from './config/db.js';

const app = express();
app.use(cors());
app.use(express.json());


app.get("/users" , async (req,res) => {
    try {
        const result = await pool.query("SELECT * FROM users");
        res.status(200).json(result.rows);
    }
    catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});