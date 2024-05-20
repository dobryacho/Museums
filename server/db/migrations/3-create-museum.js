'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Museums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      photo: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      workedTime: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      holidays: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      theme: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      coordinates: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      name_en: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description_en: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      location_en: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      city_en: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      workedTime_en: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      holidays_en: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      theme_en: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      name_de: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description_de: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      location_de: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      city_de: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      workedTime_de: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      holidays_de: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      theme_de: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Museums');
  },
};
