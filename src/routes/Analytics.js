const {
  tweetsByParty,
  tweetsByLeader,
  tweetsTimeLineByParty,
  tweetsTimeLineByLeader,
  tweetsTimeLineByUserId,
  tweetsTimeLineAllProfiles,
} = require('../controllers/Analytics');

const TweetsRoutes = (app) => {
  app.get('/tweetsByParty', tweetsByParty);
  app.get('/tweetsByLeader', tweetsByLeader);
  app.get('/tweetsTimeLineByParty', tweetsTimeLineByParty);
  app.get('/tweetsTimeLineByLeader', tweetsTimeLineByLeader);
  app.post('/tweetsTimeLineByUserId', tweetsTimeLineByUserId);
  app.get('/tweetsTimeLineAllProfiles', tweetsTimeLineAllProfiles);
};

module.exports.default = TweetsRoutes;
