const mongoose = require('mongoose');

const Profile = mongoose.model('Profile', {
  id: Number,
  name: String,
  party: String,
});

module.exports.default = Profile;
