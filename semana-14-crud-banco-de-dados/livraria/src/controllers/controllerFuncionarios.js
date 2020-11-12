const funcionarios = require('../models/funcionarios');

const getFuncionarios = (req, res) => {
  funcionarios.find((err, funcionarios) => {
    err ? res.status(424).send({ message: err.message }) : res.status(200).send(funcionarios);
  });
};

const getIdadeFuncionarioPeloId = (req, res) => {
  const id = req.params.id;
  funcionarios.find({ id }, (err, funcionario) => {
    if (err) {
      res.status(424).send({ message: err.message });
    } else {
      if (funcionario.length > 0) {
        const dataAtual = new Date();
        const idadeFuncionario = funcionario.map(func => ({
          nome: func.nome,
          idade: dataAtual.getFullYear() - parseInt(func.dataDeNascimento.toString().split('/')[2])
        }));
        res.status(200).send(idadeFuncionario);       
      } else {
        res.status(404).send('Funcionário não encontrado');
      };
    };    
  });
};

const postFuncionario = (req, res) => {
  funcionarios.countDocuments((err, count) => {
    if (err) {
      res.send(424).send({ message: err.message });
    } else {
      let funcionario = new funcionarios(req.body);
      funcionario.id = count + 1;     

      funcionario.save(err => {
        err ? res.status(424).send({ message: err.message }) : res.status(201).send('Funcionário registrado com sucesso');
      });
    };
  });
};

const putFuncionario = (req, res) => {
  const id = req.params.id;
  funcionarios.find( {id}, (err, funcionario) => {
    if (funcionario.length > 0) {
      funcionarios.updateOne({ id }, { $set: req.body }, err => {
        err ? res.status(424).send({ message: err.message }) : res.status(200).send('Funcionário atualizado com sucesso');
      });
    } else {
      res.status(404).send('Funcionário não encontrado');
    };
  });
};

const deleteFuncionario = (req, res) => {
  const id = req.params.id;
  funcionarios.find({ id }, (err, funcionario) => {
    if (funcionario.length > 0) {
      funcionarios.deleteOne({ id }, err => {
        err ? res.status(424).send({ message: err.message }) : res.status(200).send('Funcionário excluído com sucesso');
      });      
    } else {
      res.status(404).send('Funcionário não encontrado')
    };
  });
};

module.exports = {
  getFuncionarios,
  getIdadeFuncionarioPeloId,
  postFuncionario,
  putFuncionario,
  deleteFuncionario
};
