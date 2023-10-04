var connection = require("../utils/connection");
exports.save = async (favoritesObj) => {
  console.log(favoritesObj);
  return await connection.favorites.create(favoritesObj);
};
exports.update = async (updateobje, id) => {
  return await connection.favorites.update(updateobje, { where: { id: id } });
};
exports.destroy = async (id) => {
  return await connection.favorites.destroy({ where: { id: id } });
};

exports.findOne = async (query) => {
  return await connection.favorites.findOne({ where: query });
};
exports.findAll = async (query) => {
  return await connection.favorites.findAll();
};
