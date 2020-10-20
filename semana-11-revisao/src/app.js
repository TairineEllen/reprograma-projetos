const express = require('express');
const app = express();

app.use(express.json());

const index = require('./routes/index');
const series = require('./routes/seriesRoute');

app.use('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Request-With, Content-Type, Accept'
  );
  console.log('Nova requisicao realizada');
  next();
});

app.use('/', index);
app.use('/series', series);

module.exports = app;

