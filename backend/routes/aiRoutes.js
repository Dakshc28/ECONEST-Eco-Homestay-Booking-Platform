const express = require("express");

const router = express.Router();

const { generateTripPlan } = require("../controllers/aiController");

router.post("/trip-planner", generateTripPlan);

module.exports = router;