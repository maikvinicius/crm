const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const Usuario = sequelize.define('usuario', {
  nome: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

// Note: using `force: true` will drop the table if it already exists
Usuario.sync({ force: false });

module.exports = Usuario
