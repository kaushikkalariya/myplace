var Sequelize = require("sequelize");
var db = {};
const sequelize = new Sequelize("myplace", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
db.sequelize = sequelize;
db.admin = require("../models/adminModel")(sequelize, Sequelize);
db.post = require("../models/postModel")(sequelize, Sequelize);
db.favorites = require("../models/favoritesModel")(sequelize, Sequelize);
//db.college = require("../models/collegeModel.js")(sequelize, Sequelize);
//db.employer = require("../models/employerModel.js")(sequelize, Sequelize);
db.post.hasMany(db.favorites, {
  foreignKey: "postid",
  sourceKey: "id",
  as: "postid",
});

sequelize.sync();
module.exports = db;
