module.exports = async (db) => {
  await db.CryptoCurrency.bulkCreate([
    {
      crypto_id: 'cccccc01-cc01-cc01-cc01-cccccccccc01',
      symbol: 'BTC',
      name: 'Bitcoin',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      crypto_id: 'cccccc02-cc02-cc02-cc02-cccccccccc02',
      symbol: 'ETH',
      name: 'Ethereum',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      crypto_id: 'cccccc03-cc03-cc03-cc03-cccccccccc03',
      symbol: 'XRP',
      name: 'Ripple',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      crypto_id: 'cccccc04-cc04-cc04-cc04-cccccccccc04',
      symbol: 'DOGE',
      name: 'Dogecoin',
      created_at: new Date(),
      updated_at: new Date(),
    }
  ]);
};
