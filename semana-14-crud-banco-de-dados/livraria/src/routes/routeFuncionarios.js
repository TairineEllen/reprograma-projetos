const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerFuncionarios');

router.get('/', controller.getFuncionarios);
router.post('/', controller.postFuncionario);
router.put('/:id', controller.putFuncionario);
router.delete('/:id', controller.deleteFuncionario);

module.exports = router;