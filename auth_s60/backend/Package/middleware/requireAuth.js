import { application } from 'express';
import jwt from 'jsonwebtoken'

export default requireAuth(req,res,next){
    const authHeader = req.authorization
    if (!authHeader || !authHeader.startWith('Bearer')) {
        return res.status(401).json({message:'Authorization header missing or invalid'})
    }

    const token = authHeader.split(" ")[1];

    try {
        req.user = jwt.verify(token,process.env.JWT_SECRET)
        next()
    } catch (error) {
        return res.status(401).json({message:"invalid or expired token"})
    }
}



// from frontend

// {
//     method:'GET',
//     headers:{
//         'Authorization':`Bearer ${token}`,
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({email:'user@example.com',password:'password123'})
// }