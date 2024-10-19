import mongoose from "mongoose"


export const connectDB = async ()=>{
    try {
        
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb Connected `)
    } catch (error) {
        console.log("Error connecting to MongoDB: ",error.message)
        process.exit(1); // 1 is failure, 0 status code is success
    }
}