const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerLivros');

router.post('/', controller.postLivro);

module.exports = router;