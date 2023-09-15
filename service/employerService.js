var connection = require('../utils/connection');
exports.save = async (user) => {
   return await connection.employer.create(user);
};
exports.update = async (updateobje,id) => {
   return await connection.employer.update(updateobje, { where: { id: id } });
};
exports.destroy = async (id) => {
   return await connection.employer.destroy({ where: { id: id } });
};

exports.findOne = async (query) => {
   return await connection.employer.findOne({where:query});
};
exports.findAll = async (query) => {
   return await connection.employer.findAll();
};
