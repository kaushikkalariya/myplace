var connection = require('../utils/connection');
exports.save = async (user) => {
   return await connection.college.create(user);
};
exports.update = async (updateobje,id) => {
   return await connection.college.update(updateobje, { where: { id: id } });
};
exports.destroy = async (id) => {
   return await connection.college.destroy({ where: { id: id } });
};

exports.findOne = async (query) => {
   return await connection.college.findOne({where:query});
};
exports.findAll = async (query) => {
   return await connection.college.findAll({
      include: [
         { model: connection.employer, as: "collegeid", required: true }
      ]
   });
};
