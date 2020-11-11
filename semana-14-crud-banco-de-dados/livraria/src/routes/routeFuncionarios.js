const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerFuncionarios');

router.post('/', controller.postFuncionario);

module.exports = router;