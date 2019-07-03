const mongoose = require('mongoose');

const Aggregate = mongoose.model('Aggregate', {
  value: Number,
  values: Object,
  type: String,
});

module.exports.default = Aggregate;
