"use strict";
module.exports = (sequelize, Sequelize) => {
  var post = sequelize.define(
    "post",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      property_type: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      area: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      street: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      floor: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      rooms: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      total_area: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      air_direction: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      property_code: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT,
        required: true,
        allowNull: false,
      },

      swimming_pool: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      building_new: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      renovated: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      balcoy: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      yard: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      storage: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      elevator: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      parking: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return post;
};
