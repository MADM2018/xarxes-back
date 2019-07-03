const mongoose = require('mongoose');

const Map = mongoose.model('Map', {
  id: Number,
  coordinates: Array,
  geo: Object,
  place: Object,
  text: String,
});

module.exports.default = Map;
