'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      rid: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        references: {
          model: 'Roles',
          key: 'rid',
        }
      },
      uid: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID
      },
      countryCode: {
        type: Sequelize.INTEGER
      },
      tel: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.ENUM('junior-developer', 'mid-developer', 'senior-devloper', 'project-leader', 'project-manager'),
        defaultValue: 'junior-developer',
      },
      password: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.TEXT('long')
      },
      notes: {
        type: Sequelize.TEXT('long')
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};