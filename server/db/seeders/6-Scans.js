'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Scans',
      [
        {
          userId: 1,
          museumId: 5,
          createdAt: new Date('2024-05-24T10:29:00'),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          museumId: 22,
          createdAt: new Date('2024-05-24T11:11:00'),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          museumId: 18,
          createdAt: new Date('2024-05-24T11:43:00'),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          museumId: 10,
          createdAt: new Date('2024-05-24T12:24:00'),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          museumId: 2,
          createdAt: new Date('2024-05-24T12:31:00'),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          museumId: 12,
          createdAt: new Date('2024-05-24T12:38:00'),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          museumId: 14,
          createdAt: new Date('2024-05-24T13:01:00'),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          museumId: 16,
          createdAt: new Date('2024-05-24T13:16:00'),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          museumId: 17,
          createdAt: new Date('2024-05-24T14:09:00'),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          museumId: 27,
          createdAt: new Date('2024-05-24T15:28:00'),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Scans', null, {});
  },
};
