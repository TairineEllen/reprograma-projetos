const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerFuncionarios');

router.get('/', controller.getFuncionarios);
router.post('/', controller.postFuncionario);

module.exports = router;