const express = require('express');
const route = express.Router();
const controller = require('../controllers/seriesController');

route.get('/', controller.getAllSeries);
route.get('/:id', controller.getSerieByID);

module.exports = route;
