import mongoose from "mongoose";

// Define the schema
const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    unique: true,
    type: String,
  },
  password: {
    required: true,
    type: String, // ✅ Capital "S"
  },
});

// Create and export the model
const userModel = mongoose.model("User", userSchema);
export default userModel;
