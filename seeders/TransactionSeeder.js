module.exports = async (db) => {
    await db.Transaction.bulkCreate([
      {
        transaction_id: 'bbbb0000-0000-0000-0000-000000000001',
        buyer_id: '00000000-0000-0000-0000-000000000002',  // Bob ซื้อจาก Alice
        seller_id: '00000000-0000-0000-0000-000000000001', // Alice
        order_id: 'aaaa0000-0000-0000-0000-000000000001',  // Order BUY
        crypto_id: 'cccccc01-cc01-cc01-cc01-cccccccccc01',
        fiat_id: 'ffffff01-ff01-ff01-ff01-ffffffffff01',
        amount_crypto: 0.03,
        total_price_fiat: 0.03 * 1500000,
        created_at: new Date(),
        completed_at: new Date(),
      },
      {
        transaction_id: 'bbbb0000-0000-0000-0000-000000000002',
        buyer_id: '00000000-0000-0000-0000-000000000001',  // Alice ซื้อจาก Bob
        seller_id: '00000000-0000-0000-0000-000000000002', // Bob
        order_id: 'aaaa0000-0000-0000-0000-000000000002',  // Order SELL
        crypto_id: 'cccccc01-cc01-cc01-cc01-cccccccccc01',
        fiat_id: 'ffffff01-ff01-ff01-ff01-ffffffffff01',
        amount_crypto: 0.05,
        total_price_fiat: 0.05 * 1550000,
        created_at: new Date(),
        completed_at: new Date(),
      }
    ]);
  };
  