const mongoose = require('mongoose');

const funcionariosSchema = new mongoose.Schema({
  id: { type: Number },
  nome: { type: String },
  dataDeNascimento: { type: String },
  cargo: { type: String }
}, {
  versionKey: false
});

const funcionarios = mongoose.model('funcionarios', funcionariosSchema);

module.exports = funcionarios;