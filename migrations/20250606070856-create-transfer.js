'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Transfers', {
      transfer_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal('gen_random_uuid()')
      },
      from_user_id: Sequelize.UUID,
      to_user_id: Sequelize.UUID,
      crypto_id: Sequelize.UUID,
      amount_crypto: Sequelize.DECIMAL,
      transfer_type: Sequelize.STRING,
      destination_address: Sequelize.STRING,
      status: Sequelize.STRING,
      transaction_id: Sequelize.UUID,
      created_at: Sequelize.DATE,
      completed_at: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Transfers');
  }
};
