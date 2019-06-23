const mongoose = require('mongoose');

const Tweet = mongoose.model('Tweet', {
  id: Number,
  text: String,
});

module.exports.default = Tweet;