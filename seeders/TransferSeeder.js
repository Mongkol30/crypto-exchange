module.exports = async (db) => {
    await db.Transfer.bulkCreate([
      {
        transfer_id: 'cccc0000-0000-0000-0000-000000000001',
        from_user_id: '00000000-0000-0000-0000-000000000001',  // Alice → Bob
        to_user_id: '00000000-0000-0000-0000-000000000002',
        crypto_id: 'cccccc01-cc01-cc01-cc01-cccccccccc01',
        amount_crypto: 0.03,
        transfer_type: 'INTERNAL',
        destination_address: 'ReceiverWalletIdOrAddress', 
        status: 'COMPLETED',
        transaction_id: 'bbbb0000-0000-0000-0000-000000000001',
        created_at: new Date(),
        completed_at: new Date(),
      },
      {
        transfer_id: 'cccc0000-0000-0000-0000-000000000002',
        from_user_id: '00000000-0000-0000-0000-000000000002',  // Bob → Alice
        to_user_id: '00000000-0000-0000-0000-000000000001',
        crypto_id: 'cccccc01-cc01-cc01-cc01-cccccccccc01',
        amount_crypto: 0.05,
        transfer_type: 'INTERNAL',
        destination_address: 'ReceiverWalletIdOrAddress',
        status: 'COMPLETED',
        transaction_id: 'bbbb0000-0000-0000-0000-000000000002',
        created_at: new Date(),
        completed_at: new Date(),
      }
    ]);
  };
  