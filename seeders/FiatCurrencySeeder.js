module.exports = async (db) => {
  await db.FiatCurrency.bulkCreate([
    {
      fiat_id: 'ffffff01-ff01-ff01-ff01-ffffffffff01',
      symbol: 'THB',
      name: 'Thai Baht',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      fiat_id: 'ffffff02-ff02-ff02-ff02-ffffffffff02',
      symbol: 'USD',
      name: 'US Dollar',
      created_at: new Date(),
      updated_at: new Date(),
    }
  ]);
};
