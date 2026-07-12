require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const homestayRoutes = require("./routes/homestayRoutes");

const errorHandler = require("./middleware/errorHandler");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use("/api/homestays", homestayRoutes);
app.use("/api/auth", authRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});