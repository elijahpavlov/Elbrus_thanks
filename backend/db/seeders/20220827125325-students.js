'use strict';

module.exports = {
  async up(queryInterface) {
    const studentsData = [
      // { name: 'Иван Иванов', phase: 1, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      // { name: 'Иван Иванов', phase: 1, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      // { name: 'Иван Иванов', phase: 1, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      // { name: 'Иван Иванов', phase: 1, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      // { name: 'Иван Иванов', phase: 1, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      // { name: 'Иван Иванов', phase: 1, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      // { name: 'Иван Иванов', phase: 1, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      // { name: 'Иван Иванов', phase: 1, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      // { name: 'Иван Иванов', phase: 1, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      // { name: 'Иван Иванов', phase: 1, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },


      { name: 'Анатолий Кротов', phase: 2, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Андрей Доманский', phase: 2, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Андрей Недогибченко', phase: 2, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Анна Викарчук', phase: 2, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Денис Подлесный', phase: 2, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Лидия Лалетина', phase: 2, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Максим Попов', phase: 2, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Сергей Спирин', phase: 2, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Яна Смирнова', phase: 2, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      

      { name: 'Адам Махмутов', phase: 3, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Вадим Акуленко', phase: 3, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Вадим Жданов', phase: 3, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Виктория Жугдурова', phase: 3, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Владимир Леонов', phase: 3, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Даниил Ледяев', phase: 3, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Денис Осотов', phase: 3, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Илья Павлов', phase: 3, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Кирилл Шендяпин', phase: 3, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Кристина Синоверская', phase: 3, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Оскар Шейхутдинов', phase: 3, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Сергей Морозов', phase: 3, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Тамара Гаспарян', phase: 3, thanks: 0, status: 'прошел', createdAt: new Date(), updatedAt: new Date() },
    ];

    await queryInterface.bulkInsert('Students', studentsData);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Students')
  }
};
