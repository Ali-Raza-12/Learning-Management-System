const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./configs/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

connectDB();

// Basic Route
app.get("/", (req, res) => {
  res.send("MERN Backend Server is running");
});
app.use("/api/auth", authRoutes); 

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
