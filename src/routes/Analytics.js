const { tweetsByParty, tweetsByLeader } = require('../controllers/Analytics');

const TweetsRoutes = (app) => {
  app.get('/tweetsByParty', tweetsByParty);
  app.get('/tweetsByLeader', tweetsByLeader);
};

module.exports.default = TweetsRoutes;
