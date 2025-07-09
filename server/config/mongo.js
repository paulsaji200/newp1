import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();
const configs = async()=>{

    try {
        await mongoose.connect("mongodb+srv://paulsaji201:NZcL8vlXwdMWvFbP@cluster0.b7we0.mongodb.net/");
        console.log('✅ MongoDB connected');
      } catch (err) {
        console.error('❌ MongoDB connection failed:', err.message);
        process.exit(1);
      }




}
export default configs