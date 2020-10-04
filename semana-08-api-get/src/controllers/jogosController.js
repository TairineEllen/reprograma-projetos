const jogos = require('../models/jogos.json');

const getAllGames = (req, res) => {
    res.send(jogos);
};

const getGameByID = (req, res) => {
    const id = req.params.id;
    const foundID = jogos.find((game) => game.id == id);
    res.send(foundID);
};

module.exports = {
    getAllGames,
    getGameByID
};