var connection = require('../utils/connection');
exports.save = async (user) => {
   return await connection.admin.create(user);
};
exports.update = async (updateobje,id) => {
   return await connection.admin.update(updateobje, { where: { id: id } });
};
exports.destroy = async (id) => {
   return await connection.admin.destroy({ where: { id: id } });
};

exports.findOne = async (query) => {
   return await connection.admin.findOne({where:query});
};
exports.findAll = async (query) => {
   return await connection.admin.findAll();
};
