const series = require('../models/series.json');
const fs = require('fs');

const updateJsonFile = (retorno, res) => {
  fs.writeFile('./src/models/series.json', JSON.stringify(series), 'utf-8', err => {
    if (err) {
      return res.status(424).send({
        message: 'Erro ao salvar arquivo'
      });
    } else {
      res.status(200).send(retorno);
    };
  });
};

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

    updateJsonFile(series.find(serie => serie.id == id), res);

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

      updateJsonFile(series.find(serie => serie.id == id)), res;

      // fs.writeFile('./src/models/series.json', JSON.stringify(series), 'utf-8', err => {
      //   if (err) {
      //     return res.status(424).send({
      //       message: 'Erro ao salvar arquivo'
      //     });
      //   } else {
      //     res.status(201).send(series.find(serie => serie.id == id));
      //   };
      // });
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

      updateJsonFile({ message: 'Série deletada com sucesso.' }, res);

      // fs.writeFile('./src/models/series.json', JSON.stringify(series), 'utf-8', err => {
      //   if (err) {
      //     return res.status(424).send({
      //       message: 'Erro ao salvar arquivo'
      //     });
      //   } else {
      //     res.status(200).send({
      //       message: 'Série deletada com sucesso.'
      //     });
      //   };
      // });
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

      updateJsonFile(serieToBeUpdated, res);

      // fs.writeFile('./src/models/series.json', JSON.stringify(series), 'utf-8', err => {
      //   if (err) {
      //     return res.status(424).send({
      //       message: 'Erro ao salvar arquivo'
      //     });
      //   } else {
      //     res.status(200).send(serieToBeUpdated);
      //   };
      // });

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

const postNewSeason = (req, res) => {
  const idSerie = req.params.id;
  try {
    const serieToBeUpdated = series.find(serie => serie.id == idSerie);

    if (series.indexOf(serieToBeUpdated) >= 0) {
      const seasons = serieToBeUpdated.seasons;
      const id = seasons[seasons.length - 1].id + 1;
      const { code, episodes } = req.body;

      seasons.push({ id, code, episodes });

      updateJsonFile(series.find(serie => serie.id == idSerie), res);

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

const postNewEpisode = (req, res) => {
  const idSerie = req.params.id;
  const idSeason = req.params.seasonId;

  try {
    const serieToBeUpdated = series.find(serie => serie.id == idSerie);

    if (series.indexOf(serieToBeUpdated) >= 0) {
      const seasonToBeUpdated = serieToBeUpdated.seasons.find(season => season.id == idSeason);

      if (serieToBeUpdated.seasons.indexOf(seasonToBeUpdated) >= 0) {
        const episodes = seasonToBeUpdated.episodes;
        const id = episodes[episodes.length - 1].id + 1;
        const { code, name, watched } = req.body;

        episodes.push({ id, code, name, watched });

        updateJsonFile(serieToBeUpdated.seasons.find(season => season.id == idSeason), res);
      } else {
        res.status(404).send({
          message: 'Temporada não encontrada.'
        });
      };
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

const deleteSeason = (req, res) => {
  const idSerie = req.params.id;
  const idSeason = req.params.seasonId;

  try {
    const serieToBeModified = series.find(serie => serie.id == idSerie);

    if (series.indexOf(serieToBeModified) >= 0) {
      const seasons = serieToBeModified.seasons;
      const seasonToBeDeleted = seasons.find(season => season.id == idSeason);

      if (seasons.indexOf(seasonToBeDeleted) >= 0) {
        const index = seasons.indexOf(seasonToBeDeleted);

        seasons.splice(index, 1);
        updateJsonFile({ message: 'Temporada deletada com sucesso.' }, res);

      } else {
        res.status(404).send({
          message: 'Temporada não encontrada.'
        });
      };
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
  postNewSeason,
  postNewEpisode,
  updateSerieWithPut,
  deleteSerie,
  deleteSeason,
  updateLikedWithPatch
};