const Tweet = require('../models/Tweet').default;

module.exports.tweetsCount = (req, res, next) => {
  Tweet.find()
    .estimatedDocumentCount()
    .exec((err, documents) => {
      if (err) return next(err);
      res.send({ value: documents });
    });
};

module.exports.getById = (req, res, next) => {
  Tweet.findById(req.params.id).exec((err, tweet) => {
    if (err) return next(err);
    res.send(tweet);
  });
};
