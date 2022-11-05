const express = require('express');

const router = express.Router();

const pokemons = [
    "charizard", "pikachu", "snorlax", 
];

router.get('/', function(request, response) {
    const initialLetters = request.query.initialLetters;

    if (initialLetters) {
        const filteredPokemon = [];
        for(let i = 0; i < pokemons.length; i++) {
            let pokemon = pokemons[i];
            if (pokemon.startsWith(initialLetters)) {
                filteredPokemon.push(pokemon);
            }
        }
        response.send(filteredPokemon);
    } else {
        response.send(pokemons);
    }

});

router.get('/:pokemonId', function(request, response) {
    const pokemonIdStr = request.params.pokemonId;

    const translatePokemonId = new Number(pokemonIdStr);

    const pokemon = pokemons[translatePokemonId];

    response.send(pokemon);

});

router.post('/', function(request, response) {
    const newPokemon = request.body.pokemonName;

    pokemons.push(newPokemon);

    response.status(200);
    response.send("Success");
});

router.put('/:pokemonId', function(request, response) {
    const pokemonIdStr = request.params.pokemonId;
    const translatePokemonId = new Number(pokemonIdStr);

    const updatedPokemonName = request.body.pokemonName;

    pokemons[translatePokemonId] = updatedPokemonName;

    response.status(200);
    response.send("Success");
})

router.delete('/:pokemonId', function(request, response) {
    const pokemonIdStr = request.params.pokemonId;
    const translatePokemonId = new Number(pokemonIdStr);

    pokemons.splice(translatePokemonId, 1);

    response.send("Success");
})

router.get('/randomPokemon', function(request, response) {

    const randomPokemonIndex = Math.floor(Math.random() * pokemons.length);
    response.send(pokemons[randomPokemonIndex]);

});

module.exports = router;