const mongoose = require('mongoose');

const TweetSchema = require('./tweet.schema').TweetSchema;

const TweetModel = mongoose.model("tweet", TweetSchema);

function createTweet(tweet) {
  return TweetModel.create(tweet);
}

function getAllTweet() {
  return TweetModel.find().exec();
}

function getTweetByUsername(username) {
  return TweetModel.find({
    username: username
  }).exec();
}


// function insertPokemon(pokemon) {
//   return PokemonModel.create(pokemon);
// }

// function getAllPokemon() {
//   return PokemonModel.find().exec();
// }

// function getAllPokemonHealthAbove10() {
//   return PokemonModel.find({
//       health: {
//           $gte: 10,
//       }
//   }).exec();
// }

// function getPokemonById(id) {
//   return PokemonModel.findById(id).exec();
// }

// function getPokemonByOwner(owner) {
//   return PokemonModel.find({
//       owner: owner
//   }).exec();
// }


module.exports = {
  createTweet,
  getTweetByUsername,
  getAllTweet
}