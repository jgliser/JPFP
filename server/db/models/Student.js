const { DataTypes } = require('sequelize');
const db = require('../');

const Student = db.define('Student', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue: 'default-student-image.jpg',
  },
  gpa: {
    type: DataTypes.DECIMAL(3, 2),
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});

module.exports = Student;
