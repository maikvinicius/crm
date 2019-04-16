const Sequelize = require('sequelize');
const sequelize = new Sequelize('crm', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    supportBigNumbers: true,
    bigNumberStrings: true
  },
  port: '3306'
});

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Conectado com o banco de dados!');
//   })
//   .catch(err => {
//     console.error('Não foi possível conectar com o banco de dados, erro:', err);
//   });

module.exports = sequelize
