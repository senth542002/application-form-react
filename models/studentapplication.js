'use strict';
module.exports = (sequelize, DataTypes) => {
  const StudentApplication = sequelize.define('StudentApplication', {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fatherName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    motherName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobileNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {});
  StudentApplication.associate = function(models) {
    // associations can be defined here
  };
  return StudentApplication;
};
