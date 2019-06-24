const mongoose = require('mongoose');

const Tweet = mongoose.model('Tweet', {
  text: String,
  retweet_count: Number,
  retweeted_status: Object,
  entities: Object,
});

module.exports.default = Tweet;
