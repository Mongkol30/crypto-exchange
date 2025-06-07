'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      order_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.literal('gen_random_uuid()')
      },
      user_id: Sequelize.UUID,
      crypto_id: Sequelize.UUID,
      fiat_id: Sequelize.UUID,
      order_type: Sequelize.STRING,
      amount_crypto: Sequelize.DECIMAL,
      price_per_unit: Sequelize.DECIMAL,
      status: Sequelize.STRING,
      created_at: Sequelize.DATE,
      completed_at: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};
