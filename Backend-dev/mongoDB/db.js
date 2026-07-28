import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://kumardharmedra578_db_user:PAmdPSGjUptO3nLv@cluster0.98hrxxn.mongodb.net/test', {
            // Forces Node to use IPv4 instead of IPv6
            family: 4 
        });
        
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;