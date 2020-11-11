const funcionarios = require('../models/funcionarios');

const postFuncionario = (req, res) => {
  funcionarios.countDocuments((err, count) => {
    if (err) {
      res.send(424).send({ message: err.message });
    } else {
      let funcionario = new funcionarios(req.body);
      funcionario.id = count + 1;
      console.log(funcionario)

      funcionario.save(err => {
        err ? res.status(424).send({ message: err.message }) : res.status(201).send('Funcionário registrado com sucesso');
      });
    };
  });
};

module.exports = {
  postFuncionario  
};
