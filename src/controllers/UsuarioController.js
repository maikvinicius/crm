const Usuario = require('../models/UsuarioModel');

class UsuarioController {

  async listarTodos(req, res) {
    Usuario.findAll().then(usuarios => {
      return res.json(usuarios);
    });
  }

  async cadastrar(req, res) {
    Usuario.create(req.body).then(usuario => {
      return res.json(usuario);
    });
  }

  async listar(req, res) {
    Usuario.findByPk(req.params.id).then(usuarios => {
      return res.json(usuarios);
    });
  }

  async atualizar(req, res) {
    Usuario.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(usuario => {
      return res.json(usuario);
    });
  }

  async deletar(req, res) {
    Usuario.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      return res.json({ sucess: true, message: "deletado com sucesso" });
    });
  }

}

module.exports = new UsuarioController();
