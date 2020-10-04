// mesmo controller de músicas

const express = require('express');
const route = express.Router();
const controller = require('../controllers/musicasController');

route.get('/', controller.getAllArtistas);
route.get('/:id', controller.getArtistaByID);

module.exports = route;