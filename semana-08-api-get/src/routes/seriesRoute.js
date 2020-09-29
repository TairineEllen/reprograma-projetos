const express = require('express');
const route = express.Router();
const controller = require('../controllers/seriesController');

route.get('/series', controller.getAll);
route.get('/series/:id', controller.getByID);

module.exports = route;
