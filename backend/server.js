require("dotenv").config();
const aiRoutes = require("./routes/aiRoutes");
const authRoutes = require("./routes/authRoutes");
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const homestayRoutes = require("./routes/homestayRoutes");

const errorHandler = require("./middleware/errorHandler");

const app = express();

connectDB();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      process.env.FRONTEND_URL,
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/homestays", homestayRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});