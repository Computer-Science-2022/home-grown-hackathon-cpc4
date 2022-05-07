const Store = require('../models/Animal');

// @desc  Get all stores
// @route GET /api/v1/stores
// @access Public
exports.getStores = async (req, res, next) => {
  try {
    const stores = await Animal.find();

    return res.status(200).json({
      success: true,
      count: animal.length,
      data: animal
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc  Create a store
// @route POST /api/v1/stores
// @access Public
exports.addanimal = async (req, res, next) => {
  try {
    const store = await Animal.create(req.body);

    return res.status(201).json({
      success: true,
      data: store
    });
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'This animal is alrealdy tracked ' });
    }
    res.status(500).json({ error: 'Server error' });
  }
};