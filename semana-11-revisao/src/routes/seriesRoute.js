const express = require('express');
const router = express.Router();
const controller = require('../controllers/seriesController');

router.get('/', controller.getAllSeries);
router.get('/:id', controller.getSerieByID);

router.post('/', controller.postNewSerie);
router.post('/:id/season', controller.postNewSeason);
router.post('/:id/season/:seasonId', controller.postNewEpisode);

router.put('/:id', controller.updateSerieWithPut);

router.delete('/:id', controller.deleteSerie);
router.delete('/:id/season/:seasonId', controller.deleteSeason);
router.delete('/:id/season/:seasonId/episode/:episodeId', controller.deleteEpisode);

router.patch('/:id/watched', controller.updateLikedWithPatch);

module.exports = router;