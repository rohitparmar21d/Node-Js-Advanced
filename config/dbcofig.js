const Sequelize = require('sequelize');
const sequelize = new Sequelize(
   'blog', // db
   'root', // user
   '', //pswd
   {
      dialect: 'mysql',
      host: 'localhost'
   }
);
module.exports = sequelize;