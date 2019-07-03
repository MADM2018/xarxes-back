const {
  tweetsByParty,
  tweetsByLeader,
  tweetsTimeLineByParty,
  tweetsTimeLineByLeader,
  tweetsTimeLineByUserId,
} = require('../controllers/Analytics');

const TweetsRoutes = (app) => {
  app.get('/tweetsByParty', tweetsByParty);
  app.get('/tweetsByLeader', tweetsByLeader);
  app.get('/tweetsTimeLineByParty', tweetsTimeLineByParty);
  app.get('/tweetsTimeLineByLeader', tweetsTimeLineByLeader);
  app.post('/tweetsTimeLineByUserId', tweetsTimeLineByUserId);
};

module.exports.default = TweetsRoutes;
