const homestays = require("../data/homestays");

// GET ALL
exports.getAllHomestays = (req, res) => {
  res.status(200).json(homestays);
};

// GET SINGLE
exports.getHomestayById = (req, res) => {
  const id = parseInt(req.params.id);

  const homestay = homestays.find(h => h.id === id);

  if (!homestay) {
    return res.status(404).json({
      message: "Homestay not found"
    });
  }

  res.status(200).json(homestay);
};

// CREATE
exports.createHomestay = (req, res) => {
  const { name, location, price, ecoScore } = req.body;

  if (!name || !location) {
    return res.status(400).json({
      message: "Name and location are required"
    });
  }

  const newHomestay = {
    id: homestays.length + 1,
    name,
    location,
    price,
    ecoScore
  };

  homestays.push(newHomestay);

  res.status(201).json(newHomestay);
};

// UPDATE
exports.updateHomestay = (req, res) => {
  const id = parseInt(req.params.id);

  const homestay = homestays.find(h => h.id === id);

  if (!homestay) {
    return res.status(404).json({
      message: "Homestay not found"
    });
  }

  homestay.name = req.body.name || homestay.name;
  homestay.location = req.body.location || homestay.location;
  homestay.price = req.body.price || homestay.price;
  homestay.ecoScore = req.body.ecoScore || homestay.ecoScore;

  res.status(200).json(homestay);
};

// DELETE
exports.deleteHomestay = (req, res) => {
  const id = parseInt(req.params.id);

  const index = homestays.findIndex(h => h.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Homestay not found"
    });
  }

  homestays.splice(index, 1);

  res.status(204).send();
};

// SEARCH
exports.searchHomestays = (req, res) => {
  const q = req.query.q?.toLowerCase() || "";

  const result = homestays.filter(h =>
    h.name.toLowerCase().includes(q) ||
    h.location.toLowerCase().includes(q)
  );

  res.status(200).json(result);
};