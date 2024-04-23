import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("Database Successfully Connected");
        })
        .catch((error) => {
            console.log("Error in connecting to database: ", error);
        })
    } catch (error) {
        console.log("Error in connecting to database: ", error);
    }
}

export default connectDB;
