const Schema = require('mongoose').Schema

exports.PokemonSchema = new Schema({
    name: String,
    owner: String,
    health: Number
}, {collection: 'pokemon'})

