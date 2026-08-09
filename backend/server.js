require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const aiRoutes = require("./routes/aiRoutes");
const authRoutes = require("./routes/authRoutes");
const homestayRoutes = require("./routes/homestayRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// ===============================
// Connect to MongoDB
// ===============================
connectDB();

// ===============================
// CORS Configuration
// ===============================
const allowedOrigins = [
  "http://localhost:3000",
  "https://econest-eco-homestay-booking-platfo.vercel.app",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin
      // (Postman, server-to-server requests, etc.)
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// ===============================
// Parse JSON
// ===============================
app.use(express.json());

// ===============================
// Backend Health Check
// ===============================
app.get("/", (req, res) => {
  res.status(200).json({
    message: "EcoNest backend is running successfully",
    status: "OK",
  });
});

// ===============================
// API Routes
// ===============================
app.use("/api/homestays", homestayRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/ai", aiRoutes);

// ===============================
// Error Handler
// ===============================
app.use(errorHandler);

// ===============================
// Start Server
// ===============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 EcoNest backend running on port ${PORT}`);
});