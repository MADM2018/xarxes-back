const { get, getById } = require('../controllers/Tweets');

const TweetsRoutes = (app) => {
  app.get('/tweets', get);
  app.get('/tweets/:id', getById);
};

module.exports.default = TweetsRoutes;
