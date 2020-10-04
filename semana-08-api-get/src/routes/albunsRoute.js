const express = require('express');
const route = express.Router();
const controller = require('../controllers/musicasController');

route.get('/', controller.getAllAlbuns);
route.get('/:nome', controller.getAlbumByName);

module.exports = route;