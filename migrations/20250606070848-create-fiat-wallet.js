'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('FiatWallets', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      wallet_id: Sequelize.UUID,
      fiat_id: Sequelize.UUID,
      balance: Sequelize.DECIMAL,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('FiatWallets');
  }
};
