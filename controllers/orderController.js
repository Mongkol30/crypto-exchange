const { where } = require('sequelize');
const db = require('../models');

exports.getAllOrder = async (req, res) => {
  try {
    const orders = await db.Order.findAll({
       include: [
        {
          model: db.User,
          attributes: ['user_name'], 
        },
        {
          model: db.CryptoCurrency,
          attributes: ['symbol'],
        },
        {
          model: db.FiatCurrency,
          attributes: ['symbol'],
        },
      ],
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.createOrder = async (req, res) => {
  try {
    const {
      user_id,
      crypto_id,
      fiat_id,
      order_type,
      amount_crypto,
      price_per_unit
    } = req.body;

    if (order_type == 'BUY') {
      var walletLink = await db.WalletOfUser.findOne({
        where: {
          user_id,
          wallet_type: 'FIAT',
        }
      });

      const fiatWallet = await db.FiatWallet.findOne({
        where: {
          wallet_id: walletLink.wallet_id,
          fiat_id
        }
      });

      if ((price_per_unit*amount_crypto) >= fiatWallet.balance) {
        return res.status(400).json({ error: 'Not enough coins in the wallet' });
      }
      
    }else if (order_type == 'SELL') {

      var walletLink = await db.WalletOfUser.findOne({
        where: {
          user_id,
          wallet_type: 'CRYPTO',
        }
      });

      const cryptoWallet = await db.CryptoWallet.findOne({
        where: {
          wallet_id: walletLink.wallet_id,
          crypto_id
        }
      });

      if (amount_crypto >= cryptoWallet.balance) {
        return res.status(400).json({ error: 'Not enough coins in the wallet' });
      }
      
    }else{
      return res.status(400).json({ error: 'Check the information again' });
    }

    const newOrder = await db.Order.create({
      user_id,
      crypto_id,
      fiat_id,
      order_type,
      amount_crypto,
      price_per_unit,
      status: 'OPEN',
      created_at: new Date(),
      completed_at: null,
    });

    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
