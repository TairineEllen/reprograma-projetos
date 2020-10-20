const express = require('express');
const router = express.Router();
const controller = require('../controllers/seriesController');

router.get('/', controller.getAllSeries);

module.exports = router;