const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerLivros');

router.get('/', controller.getLivros);
router.get('/estoque', controller.getLivrosEmEstoque);
router.post('/', controller.postLivro);
router.delete('/:id', controller.deleteLivro);

module.exports = router;