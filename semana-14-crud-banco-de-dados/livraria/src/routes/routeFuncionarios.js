const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerFuncionarios');
const controllerLivros = require('../controllers/controllerLivros');

router.get('/', controller.getFuncionarios);
router.get('/:id/idade', controller.getIdadeFuncionarioPeloId)
router.post('/', controller.postFuncionario);
router.put('/:id', controller.putFuncionario);
router.delete('/:id', controller.deleteFuncionario);

module.exports = router;