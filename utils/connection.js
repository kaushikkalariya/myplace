var Sequelize = require('sequelize');
var db        = {};
var sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "test.db",
  define: {
    timestamps: false,
    freezeTableName: true,
  },
  logging: false
});
db.sequelize = sequelize;
db.college = require('../models/collegeModel.js')(sequelize, Sequelize);
db.employer = require('../models/employerModel.js')(sequelize, Sequelize);
db.college.hasMany(db.employer, {
  foreignKey: 'collegeid',
  sourceKey: "id",
  as: "collegeid",

});

sequelize.sync();
module.exports = db;
