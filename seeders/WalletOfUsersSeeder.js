module.exports = async (db) => {
  await db.WalletOfUser.bulkCreate([
    {
      id: 1,
      user_id: '00000000-0000-0000-0000-000000000001',
      wallet_id: '11111111-1111-1111-1111-111111111111',
      wallet_type: 'FIAT',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      user_id: '00000000-0000-0000-0000-000000000001',
      wallet_id: '22222222-2222-2222-2222-222222222222',
      wallet_type: 'CRYPTO',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      user_id: '00000000-0000-0000-0000-000000000002',
      wallet_id: '33333333-3333-3333-3333-333333333333',
      wallet_type: 'FIAT',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 4,
      user_id: '00000000-0000-0000-0000-000000000002',
      wallet_id: '44444444-4444-4444-4444-444444444444',
      wallet_type: 'CRYPTO',
      created_at: new Date(),
      updated_at: new Date(),
    }
  ]);
};
