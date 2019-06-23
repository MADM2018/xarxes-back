const Tweet = require('../models/Tweet').default;

module.exports.get = (req, res, next) => {
  Tweet.find()
    .estimatedDocumentCount()
    .exec((err, response) => {
      console.log();
      res.send({ size: response });
    });
};

module.exports.getById = (req, res, next) => {
  Tweet.findById(req.params.id, (err, account) => {
    if (err) return next(err);
    res.send(account);
  });
};
