const express = require('express');
const getAllFakeGenres = require('../controllers/fakeGenres/getAllFakeGenres');
const routerFakeGenres = express.Router();

routerFakeGenres.get("/", getAllFakeGenres);

module.exports = routerFakeGenres;