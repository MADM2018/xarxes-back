const async = require('async');

const { parseBarChartData } = require('../helpers/Charts');

const Profile = require('../models/Profile').default;
const Tweet = require('../models/Tweet').default;
const Aggregate = require('../models/Aggregate').default;

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

module.exports.tweetsTimeLineByUserId = (req, res, next) => {
  Aggregate.findOne({ type: 'tweets_month' }).exec((err, aggregate) => {
    if (err) return next(err);

    const user_id = req.body.id;
    const monthData = aggregate.values[user_id];
    const chartData = parseBarChartData(monthData);

    console.log(monthData, chartData);
    res.send(chartData);
  });
};

module.exports.tweetsTimeLineByLeader = (req, res, next) => {
  Aggregate.findOne({ type: 'tweets_month' }).exec((err, aggregate) => {
    if (err) return next(err);

    Profile.find({ type: 'leader' }).exec((err, profiles) => {
      const series = [];

      profiles.forEach((profile) => {
        const user_id = profile.id;
        const monthData = aggregate.values[user_id];
        series.push(monthData);
      });

      const chartData = parseBarChartData(series);
      res.send(chartData);
    });
  });
};

module.exports.tweetsTimeLineByParty = (req, res, next) => {
  Aggregate.findOne({ type: 'tweets_month' }).exec((err, aggregate) => {
    if (err) return next(err);

    Profile.find({ type: 'party' }).exec((err, profiles) => {
      const series = [];

      profiles.forEach((profile) => {
        const user_id = profile.id;
        const monthData = aggregate.values[user_id];
        series.push(monthData);
      });

      const chartData = parseBarChartData(series);
      res.send(chartData);
    });
  });
};
