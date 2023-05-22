const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Campus = require('./Campus')(sequelize, Sequelize);
db.Student = require('./Student')(sequelize, Sequelize);

db.Campus.hasMany(db.Student);
db.Student.belongsTo(db.Campus);

module.exports = db;
