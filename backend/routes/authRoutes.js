const express = require("express");

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const {
  validateRegister,
  validateLogin,
  handleValidationErrors,
} = require("../validators/authValidator");

const authLimiter = require("../middleware/rateLimiter");

const router = express.Router();

// Register
router.post(
  "/register",
  authLimiter,
  validateRegister,
  handleValidationErrors,
  registerUser
);

// Login
router.post(
  "/login",
  authLimiter,
  validateLogin,
  handleValidationErrors,
  loginUser
);

module.exports = router;