import mongoose from "mongoose";

let connected = false

const connectDB = async() => {
    mongoose.set('strictQuery', true);
    
    // if the database is connected, do not connect them again
    if(connected){
        console.log("MongoDB is connected");
        return;
    }

    try{
        await mongoose.connect(process.env.MONGO_URI);
        connected = true
        console.log("MongoDB Connected")
    }catch(error){
        console.error(error.message)
    }
}

export default connectDB