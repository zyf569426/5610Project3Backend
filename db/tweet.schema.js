const Schema = require('mongoose').Schema

exports.TweetSchema = new Schema({
  uuid: String,
  username: String,
  status: String,
  desc: String,
  timestamp: String
}, { collection: 'tweet' });