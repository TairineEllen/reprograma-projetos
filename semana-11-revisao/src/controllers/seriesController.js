const series = require('../models/series.json');
const fs = require('fs');

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

const postNewSerie = (req, res) => {
  try {
    const id = series[series.length - 1].id + 1;
    const { name, genre, synopsis, liked, seasons } = req.body;
    series.push({ id, name, genre, synopsis, liked, seasons });

    fs.writeFile('./src/models/series.json', JSON.stringify(series), 'utf-8', err => {
      if (err) {
        return res.status(424).send({
          message: 'Erro ao salvar arquivo'
        });
      } else {
        res.status(201).send(series.find(serie => serie.id == id));
      };
    });
  } catch (error) {
    res.status(424).send({
      message: 'Erro interno no servidor'
    });
  };
};

const updateSerieWithPut = (req, res) => {
  const id = req.params.id;
  try {
    const serieToBeUpdate = series.find(serie => serie.id == id);
    const newInfos = req.body;

    const index = series.indexOf(serieToBeUpdate);

    if (index >= 0) {
      series.splice(index, 1, newInfos);

      fs.writeFile('./src/models/series.json', JSON.stringify(series), 'utf-8', err => {
        if (err) {
          return res.status(424).send({
            message: 'Erro ao salvar arquivo'
          });
        } else {
          res.status(201).send(series.find(serie => serie.id == id));
        };
      });
    } else {
      res.status(404).send({
        message: 'Série não encontrada'
      });
    };

  } catch (error) {
    res.status(424).send({
      message: 'Erro interno no servidor'
    });
  };
};

const deleteSerie = (req, res) => {
  const id = req.params.id;
  try {
    const serieToBeDeleted = series.find(serie => serie.id == id);
    const index = series.indexOf(serieToBeDeleted);
    if (index >= 0) {
      series.splice(index, 1);
      
      fs.writeFile('./src/models/series.json', JSON.stringify(series), 'utf-8', err => {
        if (err) {
          return res.status(424).send({
            message: 'Erro ao salvar arquivo'
          });
        } else {
          res.status(200).send({
            message: 'Série deletada com sucesso.'
          });
        };
      });
    } else {
      res.status(404).send({
        message: 'Série não encontrada.'
      });
    };

  } catch (error) {
    res.status(424).send({
      message: 'Erro interno no servidor'
    });
  };
};

const updateLikedWithPatch = (req, res) => {
  const id = req.params.id;
  try {
    const serieToBeUpdated = series.find(serie => serie.id == id);
    const newLiked = req.body.liked;
    
    const index = series.indexOf(serieToBeUpdated);

    if (index >= 0) {
      serieToBeUpdated.liked = newLiked;
      series.splice(index, 1, serieToBeUpdated);
      
      fs.writeFile('./src/models/series.json', JSON.stringify(series), 'utf-8', err => {
        if (err) {
          return res.status(424).send({
            message: 'Erro ao salvar arquivo'
          });
        } else {
          res.status(200).send(serieToBeUpdated);
        };
      });

    } else {
      res.status(404).send({
        message: 'Série não encontrada.'
      });
    
    };
  
    
  } catch (error) {
    res.status(424).send({
      message: 'Erro interno no servidor'
    });    
  };
};

module.exports = {
  getAllSeries,
  getSerieByID,
  postNewSerie,
  updateSerieWithPut,
  deleteSerie,
  updateLikedWithPatch
};