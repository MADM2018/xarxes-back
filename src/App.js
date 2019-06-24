const logger = require('morgan');
const errorhandler = require('errorhandler');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const { json } = require('body-parser');
const { connect } = require('mongoose');

// routes
const TweetsRoutes = require('./routes/Tweets').default;
const ProfilesRoutes = require('./routes/Profiles').default;
const AnalyticsRoutes = require('./routes/Analytics').default;

const App = (config) => {
  const app = express();
  mongoose.set('debug', config.debug);

  loadMiddlewares(app);
  loadRoutes(app);

  connect(config.mongoURI);
  app.listen(config.port);
};

loadMiddlewares = (app) => {
  app.use(logger('dev'));
  app.use(json());
  app.use(errorhandler());
  app.use(cors());
  mongoose.Promise = global.Promise;
};

loadRoutes = (app) => {
  TweetsRoutes(app);
  ProfilesRoutes(app);
  AnalyticsRoutes(app);
};

module.exports.default = App;
