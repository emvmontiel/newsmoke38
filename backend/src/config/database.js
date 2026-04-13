import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        console.log("Connecting to:", process.env.MONGODB_URI); // Add this!
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\n MongoDB connected!
            ${connectionInstance.connection.host}`) // Shows the address of the connection instance that we just established
    } catch (error) {
        console.log("MongoDB connection failed", error);
        process.exit(1);
    }
}

// It is important for you to export the const connectDB so that you are able to use it on other files
export default connectDB;