module.exports = async (db) => {
    await db.CryptoWallet.bulkCreate([
      {
        id: 1,
        wallet_id: '22222222-2222-2222-2222-222222222222',
        crypto_id: 'cccccc01-cc01-cc01-cc01-cccccccccc01',
        balance: 0.12,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        wallet_id: '22222222-2222-2222-2222-222222222222',
        crypto_id: 'cccccc02-cc02-cc02-cc02-cccccccccc02',
        balance: 3.45,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        wallet_id: '44444444-4444-4444-4444-444444444444',
        crypto_id: 'cccccc01-cc01-cc01-cc01-cccccccccc01',
        balance: 1.01,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        wallet_id: '44444444-4444-4444-4444-444444444444',
        crypto_id: 'cccccc02-cc02-cc02-cc02-cccccccccc02',
        balance: 3.01,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  };
  