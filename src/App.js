const logger = require('morgan');
const errorhandler = require('errorhandler');
const express = require('express');
const mongoose = require('mongoose');

const { json } = require('body-parser');
const { connect } = require('mongoose');

// routes
const TweetsRoutes = require('./routes/Tweets').default;

const App = (config) => {
  const app = express();

  loadMiddlewares(app);
  loadRoutes(app);

  connect(config.mongoURI);
  app.listen(config.port);
};

loadMiddlewares = (app) => {
  app.use(logger('dev'));
  app.use(json());
  app.use(errorhandler());
  mongoose.Promise = global.Promise;
};

loadRoutes = (app) => {
  TweetsRoutes(app);
};

module.exports.default = App;
