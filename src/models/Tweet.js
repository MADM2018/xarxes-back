const mongoose = require('mongoose');

const Tweet = mongoose.model('Tweet', {
  text: String,
});

module.exports.default = Tweet;
