const express = require('express');

const TweetModel = require('../db/tweet.model');

const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('', function (request, response) {
  const tweet = request.body;

  return TweetModel.createTweet(tweet)
    .then(function (tweetData) {
      console.log(tweetData);
      const cookie = {
        tweetName: tweetData.username
      }

      const token = jwt.sign(cookie, "YufanSECRET", {
        expiresIn: '14d'
      })
      // let date = new Date(tweetData.timestamp).toDateString();
      // console.log(date);
      return response.cookie('jwt_token', token, { httpOnly: true })
        .status(200).send({ uuid: tweet.uuid, timestamp: tweet.timestamp });
    })
    .catch(function (error) {
      console.log(error)
      return response.status(400).send("Error: User cannot be created")
    })

})

// return all tweets in reverse chronological order
router.get('/', function (request, response) {

  return TweetModel.getAllTweet()
    .then(function (data) {
      response.send(data.reverse());
    })
    .catch(function (err) {
      response.status(400);
      response.send(err);
    })

})

router.get('/username/:username', function (request, response) {

  const username = request.params.username;
  return TweetModel.getTweetByUsername(username)
    .then(function (data) {
      response.send(data);
    })
    .catch(function (err) {
      response.status(400);
      response.send(err);
    })

})



module.exports = router;