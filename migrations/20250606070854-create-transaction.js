'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      transaction_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal('gen_random_uuid()')
      },
      buyer_id: Sequelize.UUID,
      seller_id: Sequelize.UUID,
      order_id: Sequelize.UUID,
      crypto_id: Sequelize.UUID,
      fiat_id: Sequelize.UUID,
      amount_crypto: Sequelize.DECIMAL,
      total_price_fiat: Sequelize.DECIMAL,
      created_at: Sequelize.DATE,
      completed_at: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};
