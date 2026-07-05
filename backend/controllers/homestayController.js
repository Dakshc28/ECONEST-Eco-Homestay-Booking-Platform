const Homestay = require("../models/Homestay");

// GET all homestays
const getHomestays = async (req, res, next) => {
  try {
    const homestays = await Homestay.find();
    res.json(homestays);
  } catch (error) {
    next(error);
  }
};

// GET homestay by ID
const getHomestayById = async (req, res, next) => {
  try {
    const homestay = await Homestay.findById(req.params.id);

    if (!homestay) {
      return res.status(404).json({ message: "Homestay not found" });
    }

    res.json(homestay);
  } catch (error) {
    next(error);
  }
};

// CREATE homestay
const createHomestay = async (req, res, next) => {
  try {
    const homestay = await Homestay.create(req.body);

    res.status(201).json(homestay);
  } catch (error) {
    next(error);
  }
};

// UPDATE homestay
const updateHomestay = async (req, res, next) => {
  try {
    const homestay = await Homestay.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!homestay) {
      return res.status(404).json({ message: "Homestay not found" });
    }

    res.json(homestay);
  } catch (error) {
    next(error);
  }
};

// DELETE homestay
const deleteHomestay = async (req, res, next) => {
  try {
    const homestay = await Homestay.findByIdAndDelete(req.params.id);

    if (!homestay) {
      return res.status(404).json({ message: "Homestay not found" });
    }

    res.json({
      message: "Homestay deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getHomestays,
  getHomestayById,
  createHomestay,
  updateHomestay,
  deleteHomestay,
};