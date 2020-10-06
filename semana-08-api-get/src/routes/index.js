const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.send(
        'Você pode consultar diferentes rotas da API ao acessar /jogos, /musicas ou /series. Artistas e álbuns que aparecem em /musicas podem ser acessados em /artistas e /albuns, respectivamente.'
    );
});

module.exports = route;