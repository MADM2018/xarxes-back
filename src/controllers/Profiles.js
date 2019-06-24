const Profile = require('../models/Profile').default;

module.exports.profilesCount = (req, res, next) => {
  Profile.find()
    .estimatedDocumentCount()
    .exec((err, documents) => {
      if (err) return next(err);
      res.send({ value: documents });
    });
};

module.exports.getAll = (req, res, next) => {
  Profile.find().exec((err, result) => {
    if (err) return next(err);
    res.send(result);
  });
};
