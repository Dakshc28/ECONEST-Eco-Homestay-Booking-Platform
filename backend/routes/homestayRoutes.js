const express = require("express");

const {
  getHomestays,
  getHomestayById,
  createHomestay,
  updateHomestay,
  deleteHomestay,
} = require("../controllers/homestayController");

const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

// Public Route
router.get("/:id", getHomestayById);

// Protected Routes
router.get("/", verifyToken, getHomestays);
router.post("/", verifyToken, createHomestay);
router.put("/:id", verifyToken, updateHomestay);
router.delete("/:id", verifyToken, deleteHomestay);

module.exports = router;