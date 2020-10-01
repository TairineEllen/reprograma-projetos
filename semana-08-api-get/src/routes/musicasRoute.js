const express = require('express');
const route = express.Router();
const controller = require('../controllers/musicasController');

route.get('/', controller.getAllMusicas);
route.get('/:id', controller.getMusicaByID);

module.exports = route;