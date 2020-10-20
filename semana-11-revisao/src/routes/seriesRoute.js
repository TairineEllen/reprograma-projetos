const express = require('express');
const router = express.Router();
const controller = require('../controllers/seriesController');

router.get('/', controller.getAllSeries);
router.get('/:id', controller.getSerieByID);
router.post('/', controller.postNewSerie);

module.exports = router;