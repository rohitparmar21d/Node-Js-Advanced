const Sequelize = require('sequelize')
const sequelize = require('../config/dbcofig')
const blog = sequelize.define('blogtable', {
//    user_id:{

//       // Integer Datatype
//       type:Sequelize.INTEGER,

//       // Increment the value automatically
//       autoIncrement:true,

//       // user_id can not be null.
//       allowNull:false,

//       // To uniquely identify user
//       primaryKey:true
//    },

  
   title: { type: Sequelize.STRING, allowNull:true },

   // Name of Column #3: email
   imagepath: { type: Sequelize.STRING, allowNull:true },

   
   decription: { type: Sequelize.STRING, allowNull:true },

   // Name of Column #3: email
   publisheddate: { type: Sequelize.DATE, allowNull:true },

   author: { type: Sequelize.STRING, allowNull:true },

   // Column: Timestamps
//    createdAt: Sequelize.DATE,
//    updatedAt: Sequelize.DATE,
});



module.exports = blog;