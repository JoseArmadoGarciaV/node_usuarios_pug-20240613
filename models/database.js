// database.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Users', 'postgres', '5432', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
