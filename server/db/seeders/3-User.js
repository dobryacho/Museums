'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'jhon@gmail.com',
          firstName: 'John',
          lastName: 'Doe',
          password: '123',
          city: 'petersburg',
          phone: '79993455434',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'oleg@gmail.com',
          firstName: 'Олег',
          lastName: 'Петров',
          password: '123',
          city: 'petersburg',
          phone: '79993455434',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'evgen322@gmail.com',
          firstName: 'Евгений',
          lastName: 'Рыжиков',
          password: '123',
          city: 'petersburg',
          phone: '79993455434',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'vlad_che_kavo@gmail.com',
          firstName: 'Владлен',
          lastName: 'Смирнов',
          password: '123',
          city: 'petersburg',
          phone: '79993455434',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'tratatatata@gmail.com',
          firstName: 'Евгений',
          lastName: 'Гений',
          password: '123',
          city: 'petersburg',
          phone: '79993455434',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'sveta__eto_vam_ne_eto@yandex.ru',
          firstName: 'Svetlana',
          lastName: 'Koreysha',
          password: '123',
          city: 'petersburg',
          phone: '7999999999',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'greg@mail.ru',
          firstName: 'Григорий',
          lastName: 'Табачков',
          password: '123',
          city: 'petersburg',
          phone: '7999999998',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'maksim_podezd@gmail.com',
          firstName: 'Макс',
          lastName: 'Кошеутов',
          password: '123',
          city: 'petersburg',
          phone: '7999999997',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'antoxa_xa@yandex.ru',
          firstName: 'Антон',
          lastName: 'Атнагулов',
          password: '123',
          city: 'petersburg',
          phone: '7999999996',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
