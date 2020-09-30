const express = require('express');
const route = express.Router();
const controller = require('../controllers/jogosController');

route.get('/', controller.getAllGames);
route.get('/:id', controller.getGameByID);

module.exports = route;