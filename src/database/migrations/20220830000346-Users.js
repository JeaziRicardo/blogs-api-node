'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', { 
      id: {
        alowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      displayName: {
        alowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        alowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        alowNull: false,
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },      
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Users');
  },
};
