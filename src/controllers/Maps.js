const Tweet = require('../models/Tweet').default;
const Map = require('../models/Map').default;

const { getMarkers } = require('../helpers/Maps');

module.exports.getTweetsPlaces = (req, res, next) => {
  Map.find().exec((err, places) => {
    if (err) return next(err);

    res.send(getMarkers(places));
  });
};

module.exports.getTweetsByState = (req, res, next) => {
  Map.find().exec((err, places) => {
    if (err) return next(err);

    res.send(getMarkers(places));
  });
};
