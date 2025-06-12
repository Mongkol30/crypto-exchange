const db = require('../models');
const { performInternalTransfer } = require('../services/transferService');
const { Op } = require('sequelize');

exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await db.Transaction.findAll({
      include: [
        {
          model: db.User,
          as: 'Buyer',
          attributes: ['user_id', 'user_name'],
        },
        {
          model: db.User,
          as: 'Seller',
          attributes: ['user_id', 'user_name'],
        },
        {
          model: db.CryptoCurrency,
          attributes: ['crypto_id', 'symbol'],
        },
        {
          model: db.FiatCurrency,
          attributes: ['fiat_id', 'symbol'],
        },
        {
          model: db.Order,
          attributes: ['order_id', 'order_type'],
        }
      ]
    });

    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.createTransaction = async (req, res) => {
  try {
    const {
      order_id,
      buyer_id,
      amount_crypto
    } = req.body;

    const order = await db.Order.findOne({ where: { order_id, status: 'OPEN' } });

    if (!order) {
      return res.status(404).json({ error: 'Order not found or not open' });
    }

    if (amount_crypto > order.amount_crypto) {
      return res.status(400).json({ error: 'Amount exceeds order amount' });
    }

    if (order.order_type == 'BUY') {

      const buyerWalletLink = await db.WalletOfUser.findOne({
        where: { user_id: buyer_id, wallet_type: 'FIAT' }
      });

      const fiatWallet = await db.FiatWallet.findOne({
        where: {
          wallet_id: buyerWalletLink.wallet_id,
          fiat_id: order.fiat_id
        }
      });

      const total_price_fiat = amount_crypto * order.price_per_unit;

      if (total_price_fiat > parseFloat(fiatWallet.balance)) {
        return res.status(400).json({ error: 'Not enough fiat in the wallet' });
      }

    } else if (order.order_type == 'SELL') {

      const buyerWalletLink = await db.WalletOfUser.findOne({
        where: { user_id: buyer_id, wallet_type: 'FIAT' }
      });

      const fiatWallet = await db.FiatWallet.findOne({
        where: {
          wallet_id: buyerWalletLink.wallet_id,
          fiat_id: order.fiat_id
        }
      });

      const total_price_fiat = amount_crypto * order.price_per_unit;

      if (total_price_fiat > parseFloat(fiatWallet.balance)) {
        return res.status(400).json({ error: 'Not enough fiat in the wallet' });
      }

    }

    const total_price_fiat = amount_crypto * order.price_per_unit;

    const transaction = await db.Transaction.create({
      buyer_id,
      seller_id: order.user_id,
      order_id,
      crypto_id: order.crypto_id,
      fiat_id: order.fiat_id,
      amount_crypto,
      total_price_fiat,
      created_at: new Date(),
      completed_at: new Date()
    });

    const remaining = order.amount_crypto - amount_crypto;
    await order.update({
      amount_crypto: remaining,
      status: remaining === 0 ? 'COMPLETED' : 'OPEN',
      completed_at: remaining === 0 ? new Date() : null
    });


    await performInternalTransfer({
      from_user_id: order.user_id,
      to_user_id: buyer_id,
      crypto_id: order.crypto_id,
      amount_crypto,
      transaction_id: transaction.transaction_id
    });

    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};