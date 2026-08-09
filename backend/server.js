require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const aiRoutes = require("./routes/aiRoutes");
const authRoutes = require("./routes/authRoutes");
const homestayRoutes = require("./routes/homestayRoutes");

const errorHandler = require("./middleware/errorHandler");

const app = express();

// Connect to MongoDB
connectDB();

// CORS configuration
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      process.env.FRONTEND_URL,
    ].filter(Boolean),
    credentials: true,
  })
);

// Parse JSON requests
app.use(express.json());

// API routes
app.use("/api/homestays", homestayRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);

// Error handler
app.use(errorHandler);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});