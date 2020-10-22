const express = require('express');
const router = express.Router();
const controller = require('../controllers/seriesController');

router.get('/', controller.getAllSeries);
router.get('/:id', controller.getSerieByID);
router.post('/', controller.postNewSerie);
router.put('/:id', controller.updateSerieWithPut);
router.delete('/:id', controller.deleteSerie);
router.patch('/:id/watched', controller.updateLikedWithPatch);

module.exports = router;