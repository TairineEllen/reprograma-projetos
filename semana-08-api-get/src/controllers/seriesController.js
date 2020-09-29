const series = require('../models/series.json');

const getAll = (req, res) => {
    res.send(series);
};

const getByID = (req, res) => {
    const id = req.params.id;
    const foundID = series.find((serie) => serie.id == id);
    res.send(foundID);
};

module.exports = {
    getAll,
    getByID
};