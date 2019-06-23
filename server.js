const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const express = require('express')
var mongoose = require('mongoose')

let app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(errorhandler())

const url = 'mongodb://localhost:27017/raw_tweets'

mongoose.Promise = global.Promise
mongoose.connect(url)

var Tweet = mongoose.model('Tweet',
  {
    text: String,
    id: Number
  })

app.get('/tweets', (req, res, next) => {
  Tweet.find().estimatedDocumentCount().exec((err, response) => {
    console.log();
    res.send({ size: response });
  });

});

app.get('/tweets/:id', (req, res, next) => {
  Tweet.findById(req.params.id, (err, account) => {
    if (err) return next(err)
    res.send(account)
  })
})


app.listen(3000)