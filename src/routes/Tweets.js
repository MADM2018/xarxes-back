const { tweetsCount, getById } = require('../controllers/Tweets');

const TweetsRoutes = (app) => {
  app.get('/tweetsCount', tweetsCount);
  app.get('/tweets/:id', getById);
};

module.exports.default = TweetsRoutes;
