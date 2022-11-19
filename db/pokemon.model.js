const mongoose = require('mongoose');

const PokemonSchema = require('./pokemon.schema').PokemonSchema

const PokemonModel = mongoose.model("Pokemon", PokemonSchema);

function insertPokemon(pokemon) {
    return PokemonModel.create(pokemon);
}

function getAllPokemon() {
    return PokemonModel.find().exec();
}

module.exports = {
    insertPokemon,
    getAllPokemon,
}