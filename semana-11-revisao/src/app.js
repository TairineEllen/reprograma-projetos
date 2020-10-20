const express = require('express');
const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Request-With, Content-Type, Accept'
  );
  console.log('Nova requisicao realizada');
  next();
});

module.exports = app;

