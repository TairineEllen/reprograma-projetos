const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllerLivros');

router.get('/', controller.getLivros);
router.get('/estoque', controller.getLivrosEmEstoque);
router.get('/editoras', controller.getLivrosPorEditora);
router.post('/', controller.postLivro);
router.put('/:id', controller.putLivro);
router.delete('/:id', controller.deleteLivro);

module.exports = router;