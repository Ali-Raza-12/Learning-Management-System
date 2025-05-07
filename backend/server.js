const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const connectDB = require("./configs/db");
const authRoutes = require("./routes/authRoutes");
const studentsRoutes = require("./routes/studentsRoutes");

require("dotenv").config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());



// Basic Route
app.get("/", (req, res) => {
  res.send("MERN Backend Server is running");
});
app.use("/api/auth", authRoutes); // Auth Routes
app.use("/api/students", studentsRoutes); // Std Routes

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  connectDB().then(()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
  }).catch((err)=>{
    console.log("error" , err.message)
  });
});
