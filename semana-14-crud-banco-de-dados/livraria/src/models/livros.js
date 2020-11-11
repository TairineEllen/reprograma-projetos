const mongoose = require('mongoose');

const livrosSchema = new mongoose.Schema({
  id: { type: Number },
  titulo: { type: String },
  autoria: { type: String },
  editora: { type: String },
  emEstoque: { type: Boolean }
}, {
  versionKey: false
});

const livros = mongoose.model('livros', livrosSchema);

module.exports = livros;