const Sequelize = require('sequelize')
const sequelize = require('../config/dbcofig')

const user =  sequelize.define("user", {
    Name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Mobile: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: true
    }
},
{
    freezeTableName: true
});

module.exports = user;
