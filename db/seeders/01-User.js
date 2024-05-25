'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const bcrypt = require('bcrypt');
    const pass = "1";

    const hashPassword = async (password) => {
      const hash = await bcrypt.hash(password, 10);
      return hash;
    }

    await queryInterface.bulkInsert('Users', [
      {name: "admin", email: "elbrus@ca.com", password: await hashPassword(pass)},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
