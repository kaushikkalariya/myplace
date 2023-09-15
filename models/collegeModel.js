'use strict';
module.exports = (sequelize, Sequelize) => {
  var college = sequelize.define('college', {
    id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
      },
      name:{
        type:Sequelize.STRING,
        required:true,
        allowNull: false,
      }
  },{
    freezeTableName: true,
   
  });  
  return college;
};

