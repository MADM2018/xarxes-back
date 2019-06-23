const App = require('./src/App').default;

App({
  port: 3000,
  debug: true,
  mongoURI: 'mongodb://localhost:27017/raw_tweets',
});
