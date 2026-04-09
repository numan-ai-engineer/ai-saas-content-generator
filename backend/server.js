import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";  // ensure .js extension

import aiRoutes from "./routes/aiRoutes.js"; 
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB(); // ← یہ MongoDB connect کرے گا

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.use("/api/ai", aiRoutes);
app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));