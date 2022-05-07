const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');

const AnimalSchema = new mongoose.Schema({
  animalId: {
    type: String,
    required: [true, 'Please add a animal tracker  ID'],
    unique: true,
    trim: true,
    maxlength: [10, 'Animal tracker ID must be less than 10 chars']
  },
  address: {
    type: String,
    required: [true, 'Please add an origin area']
  },
  location: {
    type: {
      type: String,
      enum: ['Point']
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    },
    formattedAddress: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Geocode & create location
AnimalSchema.pre('save', async function(next) {
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: 'Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress
  };

  // Do not save address
  this.address = undefined;
  next();
});

module.exports = mongoose.model('Animal', AnimalSchema);
