'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {
        user_id: '00000000-0000-0000-0000-000000000001',
        user_name: 'alice123',
        password: Buffer.from(await bcrypt.hash('password123', 10)),
        email: 'alice@example.com',
        name: 'Alice Wonderland',
      },
      {
        user_id: '00000000-0000-0000-0000-000000000002',
        user_name: 'bob456',
        password: Buffer.from(await bcrypt.hash('secure456', 10)),
        email: 'bob@example.com',
        name: 'Bob Builder',
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
