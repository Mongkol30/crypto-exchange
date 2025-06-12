module.exports = async (db) => {
    await db.Order.bulkCreate([
      {
        order_id: 'aaaa0000-0000-0000-0000-000000000001',  
        user_id: '00000000-0000-0000-0000-000000000001',   // Alice
        crypto_id: 'cccccc01-cc01-cc01-cc01-cccccccccc01', // BTC
        fiat_id: 'ffffff01-ff01-ff01-ff01-ffffffffff01',   // THB
        order_type: 'BUY',
        amount_crypto: 0.05,
        price_per_unit: 1500000,
        status: 'OPEN',
        created_at: new Date(),
        completed_at: null,
      },
      {
        order_id: 'aaaa0000-0000-0000-0000-000000000002',
        user_id: '00000000-0000-0000-0000-000000000002',   // Bob
        crypto_id: 'cccccc01-cc01-cc01-cc01-cccccccccc01', // BTC
        fiat_id: 'ffffff01-ff01-ff01-ff01-ffffffffff01',   // THB
        order_type: 'SELL',
        amount_crypto: 0.10,
        price_per_unit: 1550000,
        status: 'OPEN',
        created_at: new Date(),
        completed_at: null,
      }
    ]);
  };
  