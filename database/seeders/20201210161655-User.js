'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John',
        email: 'johndoe@example.com',
        password: 'ueyshsjs',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane',
        email: 'janedoe@example.com',
        password: 'ueyshsjds',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
