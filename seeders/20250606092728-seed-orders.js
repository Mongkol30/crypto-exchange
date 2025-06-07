'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        order_id: 'aaaa0000-0000-0000-0000-000000000001',
        user_id: '00000000-0000-0000-0000-000000000001',
        crypto_id: 'cccccc01-cc01-cc01-cc01-cccccccccc01',
        fiat_id: 'ffffff01-ff01-ff01-ff01-ffffffffff01',
        order_type: 'BUY', // หรือ SELL
        amount_crypto: 0.1,
        price_per_unit: 1200000,
        status: 'OPEN', // OPEN | COMPLETED | CANCELLED
        created_at: new Date(),
        completed_at: null
      },
      {
        order_id: 'aaaa0000-0000-0000-0000-000000000002',
        user_id: '00000000-0000-0000-0000-000000000002',
        crypto_id: 'cccccc01-cc01-cc01-cc01-cccccccccc01',
        fiat_id: 'ffffff01-ff01-ff01-ff01-ffffffffff01',
        order_type: 'SELL',
        amount_crypto: 0.05,
        price_per_unit: 1250000,
        status: 'OPEN',
        created_at: new Date(),
        completed_at: null
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
