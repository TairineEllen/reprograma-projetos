const series = require('../models/series.json');

const getAllSeries = (req, res) => {
    res.send(series);
};

const getSerieByID = (req, res) => {
    const id = req.params.id;
    const foundID = series.find((serie) => serie.id == id);
    res.send(foundID);
};

module.exports = {
    getAllSeries,
    getSerieByID
};