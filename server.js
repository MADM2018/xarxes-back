const App = require('./src/App').default;

App({
  port: 2000,
  debug: true,
  mongoURI: 'mongodb://localhost:27017/raw_tweets',
});
