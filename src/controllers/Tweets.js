const Tweet = require('../models/Tweet').default;
const Aggregate = require('../models/Aggregate').default;

module.exports.tweetsCount = (req, res, next) => {
  Tweet.find()
    .estimatedDocumentCount()
    .exec((err, documents) => {
      if (err) return next(err);
      res.send({ value: documents });
    });
};

module.exports.retweetsCount = (req, res, next) => {
  Aggregate.find({ type: 'hashtags' }).exec((err, result) => {
    if (err) return next(err);
    res.send({ value: result[0].value });
  });
};

module.exports.hashtagsCount = (req, res, next) => {
  Aggregate.find({ type: 'retweets' }).exec((err, result) => {
    if (err) return next(err);
    res.send({ value: result[0].value });
  });
};

module.exports.usedSpace = (req, res, next) => {
  Tweet.collection.stats((err, result) => {
    if (err) return next(err);

    res.send({ value: result.size });
  });
};

module.exports.getById = (req, res, next) => {
  Tweet.findById(req.params.id).exec((err, tweet) => {
    if (err) return next(err);
    res.send(tweet);
  });
};
