const express = require('express');
const router = express.Router();
const seeds = require('./seeds');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

mongoose
    .conect(MONGODB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(self => {
        console.log(`Connected to the database: "${sel.connection.name}"`);
        return self.connection.dropDatabase();
    }) /* me he quedado aqui*/

/* GET home page */
router.get('/', (req, res, next) => res.render('index', { title: 'Drnz' }));

module.exports = router;
