'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Categories', {
      id: {
        alowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        alowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Categories');
  }
};
