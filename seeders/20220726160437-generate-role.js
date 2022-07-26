'use strict';
const translator = require("short-uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Roles', [
      {
        rid: translator.uuid(),
        name: 'super_Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rid: translator.uuid(),
        name: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        rid: translator.uuid(),
        name: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
