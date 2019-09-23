'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    .then(() => {
    return queryInterface.createTable('StudentApplications', {
        id: {
          allowNull: false,
        //  autoIncrement: true,
          primaryKey: true,
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        fatherName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        motherName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        mobileNumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        dateOfBirth: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('StudentApplications');
  }
};
