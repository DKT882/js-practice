import express from 'express';
const router=express.Router()
import UserModel from '../models/userModel.js'

// crud operations 

// this is to fatch data
router.get('/user',async (req,res) => {
    console.log('request sent to fatch data')
    try{
        const users=await UserModel.find()
        res.status(200).json(users)
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
})

// create
router.post('/user', async (req, res) => {
    try {
        const { name, age, weight } = req.body ?? {};

        if (!name || age === undefined || weight === undefined) {
            return res.status(400).json({
                success: false,
                message: 'name, age, and weight are required. Send JSON with Content-Type: application/json.'
            });
        }

        const newUser = new UserModel({ name, age, weight });
        await newUser.save();
        res.status(200).json({
            success: true,
            message: "your message is sent"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

// update

export default router;
