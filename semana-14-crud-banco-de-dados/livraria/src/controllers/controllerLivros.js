const livros = require('../models/livros');

const postLivro = (req, res) => {
  livros.countDocuments((err, count) => {
    if (err) {
      res.send(424).send({ message: err.message });
    } else {
      let livro = new livros(req.body);
      console.log(count)
      livro.id = count + 1;

      livro.save(err => {
        err ? res.status(424).send({ message: err.message }) : res.status(201).send('Livro registrado com sucesso');
      });
    };
  });
};

module.exports = {
  postLivro
};
