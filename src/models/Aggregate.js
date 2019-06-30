const mongoose = require('mongoose');

const Aggregate = mongoose.model('Aggregate', {
  value: Number,
  type: String,
});

module.exports.default = Aggregate;
