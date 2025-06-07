'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Transactions', [
      {
        transaction_id: 'bbbb0000-0000-0000-0000-000000000001',
        buyer_id: '00000000-0000-0000-0000-000000000001',
        seller_id: '00000000-0000-0000-0000-000000000002',
        order_id: 'aaaa0000-0000-0000-0000-000000000001',
        crypto_id: 'cccccc01-cc01-cc01-cc01-cccccccccc01',
        fiat_id: 'ffffff01-ff01-ff01-ff01-ffffffffff01',
        amount_crypto: 0.05,
        total_price_fiat: 62500, // 0.05 * 1,250,000
        created_at: new Date(),
        completed_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Transactions', null, {});
  }
};
