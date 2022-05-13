const dotenv = require('dotenv');
dotenv.config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
   process.env.DB_NAME, // db
   process.env.DB_USER, // user
   process.env.DB_PASSWORD, //pswd
   {
      dialect: 'mysql',
      host: process.env.DB_HOST
   }
);
module.exports = sequelize;