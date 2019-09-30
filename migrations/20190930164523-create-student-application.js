'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>  queryInterface.addConstraint('StudentApplications', ['name','fatherName','dateOfBirth'], { type: 'unique', name: 'unique_records'}) ,

  down: (queryInterface, Sequelize) => queryInterface.removeConstraint('StudentApplications','unique_records')
};
