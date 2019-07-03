const { getTweetsPlaces, getTweetsByState } = require('../controllers/Maps');

const MapsRoutes = (app) => {
  app.get('/getTweetsPlaces', getTweetsPlaces);
  app.get('/getTweetsByState', getTweetsByState);
};

module.exports.default = MapsRoutes;
