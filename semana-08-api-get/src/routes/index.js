const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.send(
        'Você pode consultar diferentes rotas da API ao acessar /jogos, /musicas ou /series'
    );
});

module.exports = route;