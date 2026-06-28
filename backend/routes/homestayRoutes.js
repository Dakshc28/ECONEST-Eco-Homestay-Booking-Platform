const express = require("express");

const {
  getAllHomestays,
  getHomestayById,
  createHomestay,
  updateHomestay,
  deleteHomestay,
  searchHomestays
} = require("../controllers/homestayController");

const router = express.Router();

// Search
router.get("/search", searchHomestays);

// CRUD
router.get("/", getAllHomestays);
router.get("/:id", getHomestayById);
router.post("/", createHomestay);
router.put("/:id", updateHomestay);
router.delete("/:id", deleteHomestay);

module.exports = router;