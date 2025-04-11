import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String, // Plain text for now
  role: { type: String, enum: ["student", "teacher"], required: true }
});

export default mongoose.model("User", userSchema);
