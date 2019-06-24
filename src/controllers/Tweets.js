const Tweet = require('../models/Tweet').default;

module.exports.tweetsCount = (req, res, next) => {
  Tweet.find()
    .estimatedDocumentCount()
    .exec((err, documents) => {
      if (err) return next(err);
      res.send({ value: documents });
    });
};

module.exports.retweetsCount = (req, res, next) => {
  Tweet.aggregate([
    {
      $group: {
        _id: null,
        total: {
          $sum: '$retweeted_status.retweet_count',
        },
      },
    },
  ]).exec((err, result) => {
    if (err) return next(err);
    res.send({ value: result[0].total });
  });
};

module.exports.hashtagsCount = (req, res, next) => {
  Tweet.aggregate([
    {
      $group: {
        _id: null,
        total: {
          $sum: {
            $cond: { if: { $isArray: '$entities.hashtags' }, then: { $size: '$entities.hashtags' }, else: '0' },
          },
        },
      },
    },
  ]).exec((err, result) => {
    if (err) return next(err);
    res.send({ value: result[0].total });
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
