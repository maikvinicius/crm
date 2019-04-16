const express = require('express');
const routes = express.Router();

const UsuarioController = require('./controllers/UsuarioController');

routes.get("/usuario", UsuarioController.listarTodos);
routes.post("/usuario", UsuarioController.cadastrar);
routes.get("/usuario/:id", UsuarioController.listar);
routes.put("/usuario/:id", UsuarioController.atualizar);
routes.delete("/usuario/:id", UsuarioController.deletar);

module.exports = routes;
