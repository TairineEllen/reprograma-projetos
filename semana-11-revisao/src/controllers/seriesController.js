const series = require('../models/series.json');

const getAllSeries = (req, res) => {
  res.send(series);
};

module.exports = {
  getAllSeries
};