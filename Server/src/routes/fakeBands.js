const express = require('express');
const { getAllFakeBands, getFakeBandsById, createRandomFakeBand, updateAllFakeBand, patchFakeBand, deleteFakeBand, createFakeBand } = require('../controllers/fakeBands');
const routerFakeBands = express.Router();

routerFakeBands.get('/', getAllFakeBands);
routerFakeBands.get('/:id', getFakeBandsById);
routerFakeBands.post('/random', createRandomFakeBand);
routerFakeBands.post('/', createFakeBand);
routerFakeBands.put('/', updateAllFakeBand);
routerFakeBands.patch('/', patchFakeBand);
routerFakeBands.delete('/', deleteFakeBand);

module.exports = routerFakeBands;
