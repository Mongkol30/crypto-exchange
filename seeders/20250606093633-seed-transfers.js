'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Transfers', [
      {
        transfer_id: 'ffff0000-0000-0000-0000-000000000001',
        from_user_id: '00000000-0000-0000-0000-000000000001',
        to_user_id: '00000000-0000-0000-0000-000000000002',
        crypto_id: 'cccccc01-cc01-cc01-cc01-cccccccccc01',
        amount_crypto: 0.01,
        transfer_type: 'INTERNAL', // หรือ 'EXTERNAL'
        destination_address: null, // ถ้า INTERNAL ใส่ null ได้
        status: 'COMPLETED',
        transaction_id: 'bbbb0000-0000-0000-0000-000000000001',
        created_at: new Date(),
        completed_at: new Date(),
      },
      {
        transfer_id: 'ffff0000-0000-0000-0000-000000000002',
        from_user_id: '00000000-0000-0000-0000-000000000002',
        to_user_id: null, // ปลายทางอยู่นอกระบบ
        crypto_id: 'cccccc01-cc01-cc01-cc01-cccccccccc01',
        amount_crypto: 0.02,
        transfer_type: 'EXTERNAL',
        destination_address: 'bc1qxyzabc123externaladdress',
        status: 'PENDING',
        transaction_id: null,
        created_at: new Date(),
        completed_at: null,
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Transfers', null, {});
  }
};
