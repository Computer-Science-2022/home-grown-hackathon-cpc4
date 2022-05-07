const express = require('express');
const { getStores, addStore } = require('../controllers/animal');

const router = express.Router();

router
  .route('/')
  .get(getanimal)
  .post(addanimal);

module.exports = router;