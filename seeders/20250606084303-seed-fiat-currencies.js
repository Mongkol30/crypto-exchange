'use strict';
const crypto = require("crypto");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('FiatCurrencies', [
      {
        fiat_id: 'ffffff01-ff01-ff01-ff01-ffffffffff01',
        symbol: 'THB',
        name: 'Thai Baht',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        fiat_id: 'ffffff02-ff02-ff02-ff02-ffffffffff02',
        symbol: 'USD',
        name: 'US Dollar',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('FiatCurrencies', null, {});
  }
};
