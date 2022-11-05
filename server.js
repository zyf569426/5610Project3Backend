const express = require('express');
const PokemonRoute = require('./api/pokemon');
const HelperFunctions = require('./helper');

const obj = {
    banana: "yellow",
    apple: "red",
}

// const banana = obj.banana;
// const apple = obj.apple;
const {banana, apple} = obj;



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/pokemon', PokemonRoute);

app.get('/', (req, res) => {
    res.send("This is the first route!");
})

app.get('/', (req, res) => {

    res.send("This is the second route");
})

app.put('/', (req, res) => {

    res.send("We did a PUT request");

});

app.get('/goodbye', (req, res) => {

    res.send("Goodbye, Web Dev");
})

app.listen(8000, () => {
    console.log('Starting server...?')
})