'use strict';
module.exports = (sequelize, Sequelize) => {
  var employer = sequelize.define('employer', {
    id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
      },
      name:{
        type:Sequelize.STRING,
        required:true,
        allowNull: false,
      },
      collegeid:{
        type: Sequelize.INTEGER,
        allowNull: false,
      }
  },{
    freezeTableName: true,
   
  });  
  return employer;
};

