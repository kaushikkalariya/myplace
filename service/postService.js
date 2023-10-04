var connection = require("../utils/connection");
exports.save = async (user) => {
  return await connection.post.create(user);
};
exports.update = async (updateobje, id) => {
  return await connection.post.update(updateobje, { where: { id: id } });
};
exports.destroy = async (id) => {
  return await connection.post.destroy({ where: { id: id } });
};

exports.findOne = async (query) => {
  return await connection.post.findOne({ where: query });
};
exports.findAll = async (query) => {
  return await connection.post.findAll();
};
