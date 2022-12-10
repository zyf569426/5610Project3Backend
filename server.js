const express = require('express');
const PokemonRoute = require('./api/pokemon');
const OwnerRoute = require('./api/owner');
const HelperFunctions = require('./helper');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const obj = {
    banana: "yellow",
    apple: "red",
}

// const banana = obj.banana;
// const apple = obj.apple;
const {banana, apple} = obj;

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/pokemon', PokemonRoute);
app.use('/api/owner', OwnerRoute);

// 'localhost:8000' + '/' 
app.get('/', function(req, res) {
    res.send('I like bananas')
})

app.get('/', (req, res) => {
    res.send("This is the first route!");
})


app.put('/', (req, res) => {
    res.status(404);
    res.send("We did a PUT request");
});

app.get('/goodbye', (req, res) => {

    res.send("Goodbye, Web Dev");
})

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const mongoEndpoint = 'mongodb://127.0.0.1/pokemons';
mongoose.connect(mongoEndpoint, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));

app.listen(process.env.PORT || 8000, () => {
    console.log('Starting server...?')
})