const Tweet = require('../models/Tweet').default;

module.exports.tweetsCount = (req, res, next) => {
  Tweet.find()
    .estimatedDocumentCount()
    .exec((err, response) => {
      if (err) return next(err);
      res.send({ count: response });
    });
};

module.exports.getById = (req, res, next) => {
  Tweet.findById(req.params.id).exec((err, tweet) => {
    if (err) return next(err);
    res.send(tweet);
  });
};
