"use strict";
module.exports = (sequelize, Sequelize) => {
  var admin = sequelize.define(
    "admin",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return admin;
};
