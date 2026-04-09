import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://numan:SOFTwarese007@cluster0.xshxtrf.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected successfully 🚀"))
  .catch((err) => console.log("MongoDB connection error:", err));