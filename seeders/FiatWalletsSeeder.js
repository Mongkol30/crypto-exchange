module.exports = async (db) => {
    await db.FiatWallet.bulkCreate([
      {
        id: 1,
        wallet_id: '11111111-1111-1111-1111-111111111111',
        fiat_id: 'ffffff01-ff01-ff01-ff01-ffffffffff01',
        balance: 50000.00,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        wallet_id: '33333333-3333-3333-3333-333333333333',
        fiat_id: 'ffffff01-ff01-ff01-ff01-ffffffffff01',
        balance: 190000.00,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  };
  