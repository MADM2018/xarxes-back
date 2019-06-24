const async = require('async');

const Profile = require('../models/Profile').default;
const Tweet = require('../models/Tweet').default;

module.exports.tweetsByParty = (req, res, next) => {
  Profile.find({ type: 'party' }).exec((err, profiles) => {
    if (err) return next(err);

    const response = {};
    const tasks = [];

    profiles.forEach((profile) => {
      const { id, name, party } = profile;

      tasks.push((done) => {
        Tweet.find({
          'user.id': id,
        }).exec((err, result) => {
          response[id] = {
            name,
            party,
            tweets: result.length,
          };
          done(err, result);
        });
      });
    });

    async.parallel(tasks, (error) => {
      if (error) return next(error);
      res.send(response);
    });
  });
};

module.exports.tweetsByLeader = (req, res, next) => {
  Profile.find({ type: 'leader' }).exec((err, profiles) => {
    if (err) return next(err);

    const response = {};
    const tasks = [];

    profiles.forEach((profile) => {
      const { id, name, party } = profile;

      tasks.push((done) => {
        Tweet.find({
          'user.id': id,
        }).exec((err, result) => {
          response[id] = {
            name,
            party,
            tweets: result.length,
          };
          done(err, result);
        });
      });
    });

    async.parallel(tasks, (error) => {
      if (error) return next(error);
      res.send(response);
    });
  });
};
