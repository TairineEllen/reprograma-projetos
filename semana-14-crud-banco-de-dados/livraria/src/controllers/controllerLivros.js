const livros = require('../models/livros');

const getLivros = (req, res) => {
  livros.find((err, livros) => {
    err ? res.status(424).send({ message: err.message }) : res.status(200).send(livros);
  });
};

const getLivrosEmEstoque = (req, res) => {
  livros.find({ emEstoque: true }, (err, livros) => {
    err ? res.status(424).send({ message: err.message }) : res.status(200).send(livros);
  });
};

const getLivrosPorEditora = (req, res) => {
    livros.find((err, livros) => {
      const editoras = [];
      if (err) {
        res.status(424).send({ message: err.message });
      } else {
        livros.map(livro => livro.editora).forEach(editora => {
          if (editoras.indexOf(editora) === -1) {
            editoras.push(editora);
          };
        });
        const livrosPorEditora = editoras.map(editora => ({
          editora,
          livros: livros.filter(livro => livro.editora == editora).map(livro => ({
            id: livro.id,
            titulo: livro.titulo,
            autoria: livro.autoria,
            emEstoque: livro.emEstoque
          }))
        }));
        res.status(200).send(livrosPorEditora);
      };    
  });
};

const postLivro = (req, res) => {
  livros.countDocuments((err, count) => {
    if (err) {
      res.send(424).send({ message: err.message });
    } else {
      let livro = new livros(req.body);
      livro.id = count + 1;

      livro.save(err => {
        err ? res.status(424).send({ message: err.message }) : res.status(201).send('Livro registrado com sucesso');
      });
    };
  });
};

const putLivro = (req, res) => {
  const id = req.params.id;
  livros.find({ id }, (err, livro) => {
    if (livro.length > 0) {
      livros.updateOne({ id }, { $set: req.body }, err => {
        err ? res.status(424).send({ message: err.message }) : res.status(200).send('Livro atualizado com sucesso');
      });
    } else {
      res.status(404).send('Livro não encontrado');
    };
  });
};

const deleteLivro = (req, res) => {
  const id = req.params.id;
  livros.find({ id }, (err, livro) => {
    if (livro.length > 0) {
      livros.deleteOne({ id }, err => {
        err ? res.status(424).send({ message: err.message }) : res.status(200).send('Livro excluído com sucesso');
      });
    } else {
      res.status(404).send('Livro não encontrado');
    };
  });
};

module.exports = {
  getLivros,
  getLivrosEmEstoque,
  getLivrosPorEditora,
  postLivro,
  putLivro,
  deleteLivro
};
