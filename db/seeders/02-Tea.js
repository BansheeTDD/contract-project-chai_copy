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
    
    await queryInterface.bulkInsert('Teas', [
      {
        title: "Дарджиилинг (англ. Darjeeling tea)",
        place_cultivation: "Территория округа Дарджилинг, расположенного в северной горной части индийского штата Западная Бенгалия в Гималаях",
        description: "Чёрный чай, выращенный в окрестностях одноименного города в северной горной части Индии в Гималаях, собранный и изготовленный с соблюдением определённых условий.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Darjeeling%2C_India%2C_Darjeeling_tea_leaves.jpg/1920px-Darjeeling%2C_India%2C_Darjeeling_tea_leaves.jpg",
      }, {
        title: "Чай Дунтин билочунь",
        place_cultivation: "Произрастает в горах Дунтиншань, которые обрамляют озеро Тайху в провинции Цзянсу, Китай.",
        description: "разновидность зелёного чая с сильным ароматом из провинции Цзянсу, Китай. Изготовляется вручную. Отмечен почётным титулом Знаменитый чай Китая.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Biluochun_%28medium_grade%2C_spring_2007%29.jpg/1920px-Biluochun_%28medium_grade%2C_spring_2007%29.jpg",
      }, {
        title: "Тайский чай сноу-шу",
        place_cultivation: "произведён в районе Новоомского поселения расоположенного вдоль реки Иртыш. Недалеко от города Омска",
        description: "Дерзкий, резкий, боящийся всего и вся, и приятный на запах :)",
        image: "https://sun9-39.userapi.com/impg/zgbh8sjh3GrAVOiQKxRY5JjTs80eBEuMCmlAdw/vO5_jF_BIK8.jpg?size=1616x1187&quality=95&sign=b589238adbb1092f0fb83f8fa70c157b&c_uniq_tag=fPYA9PMNatPeS9-7uU8aRz7_peFPtMOIFuJf099S1Po&type=album",
      }, {
        title: "Чай Rick, манчкин высокогорный",
        place_cultivation: "Произрастает в Санкт-Петербурге, в Московском районе города",
        description: "Эта разновидность чая подходит всем любителям ночных тыг-дыков и низкой посадки. С ним вы забудете что такое тревога и стресс",
        image: "https://sun9-13.userapi.com/impg/FbkDgNJkmoIxZHpRObY6XWxgHfJ0d3iFkyfjTA/A3OmP_0elLw.jpg?size=1280x1055&quality=95&sign=6cea981ce65a55b895dc7a2d01632e92&type=album",
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
    await queryInterface.bulkDelete('Teas', null, {});
  }
};
