const mongoose = require('mongoose');

const User = mongoose.model('User', {
  id: Number,
  text: String,
});

module.exports.default = User;
