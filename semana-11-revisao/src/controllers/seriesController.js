const series = require('../models/series.json');

const getAllSeries = (req, res) => {
  res.send(series);
};

const getSerieByID = (req, res) => {
  const id = req.params.id;
  try {
    const foundID = series.find(serie => serie.id == id);
    if (foundID) {
      res.status(200).send(foundID);
    } else {
      res.status(404).send({
        message: 'Série não encontrada'
      });
    };
  } catch (err) {
    res.status(424).send({
      message: 'Erro interno no servidor'
    });
  };
};

module.exports = {
  getAllSeries,
  getSerieByID
};