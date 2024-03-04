require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const routerFakeBands = require('./routes/fakeBands');
const router = require('./routes');
const routerFakeGenres = require('./routes/fakeGenres');
const { URL } = process.env;


app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', `${URL}`)
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH,DELETE');
    next();
});

app.use('/index', router);
app.use('/fakeBands', routerFakeBands);
app.use('/fakeGenres', routerFakeGenres);

module.exports = app;