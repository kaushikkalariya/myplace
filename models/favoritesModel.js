"use strict";
module.exports = (sequelize, Sequelize) => {
  var favorites = sequelize.define(
    "favorites",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      token: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return favorites;
};
