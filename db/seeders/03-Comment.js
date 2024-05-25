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
    await queryInterface.bulkInsert('Comments', [
      {
        user_id: 6,
        tea_id: 7,
        content: "Пробовал когда-то. Отвратительная вещь",
      }, {
        user_id: 7,
        tea_id: 7,
        content: "А мне понравилось",
      }, {
        user_id: 6,
        tea_id: 7,
        content: "Давай подерёмся из-за этого",
      }, {
        user_id: 7,
        tea_id: 8,
        content: "Не чёрный чай и этим всё сказано!",
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Comments', null, {})
  }
};
