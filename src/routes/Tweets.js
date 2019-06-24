const { tweetsCount, retweetsCount, hashtagsCount, usedSpace, getById } = require('../controllers/Tweets');

const TweetsRoutes = (app) => {
  app.get('/tweetsCount', tweetsCount);
  app.get('/retweetsCount', retweetsCount);
  app.get('/hashtagsCount', hashtagsCount);
  app.get('/usedSpace', usedSpace);

  app.get('/tweets/:id', getById);
};

module.exports.default = TweetsRoutes;
