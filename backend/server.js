const express = require("express");
const cors = require("cors");
require("dotenv").config();

const homestayRoutes = require("./routes/homestayRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to EcoNest Backend API!"
  });
});

// Routes
app.use("/api/homestays", homestayRoutes);

// Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});