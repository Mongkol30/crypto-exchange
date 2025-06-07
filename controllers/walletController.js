const db = require('../models');


exports.getAllWallets = async (req, res) => {
  try {
    const wallets = await db.WalletOfUser.findAll({
      include: [
        {
          model: db.FiatWallet,
          attributes: ['wallet_id'], 
          include: [
            {
              model: db.FiatCurrency,
              attributes: ['symbol'], 
            }
          ],
          attributes: ['balance'], 
        },
        {
          model: db.CryptoWallet,
          attributes: ['wallet_id'], 
          include: [
            {
              model: db.CryptoCurrency,
              attributes: ['symbol'], 
            }
          ],
          attributes: ['balance'], 
        }
      ]
    });
    res.json(wallets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};