import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI || process.env.MONGODN_URI;

        if (!mongoUri) {
            console.error('MongoDB URI not found in environment variables');
            return;
        }

        await mongoose.connect(mongoUri);
        console.log('Mongoose connected');
    }
    catch (error) {
        console.error('MongoDB connection failed:', error.message);
    }
}

export default connectDB;