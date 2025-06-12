const db = require('../models');

exports.getAllTransfers = async (req, res) => {
  try {
    const transfers = await db.Transfer.findAll({
      include: [
        {
          model: db.User,
          as: 'FromUser',
          attributes: ['user_id', 'user_name'],
        },
        {
          model: db.User,
          as: 'ToUser', 
          attributes: ['user_id', 'user_name'],
        },
        {
          model: db.CryptoCurrency,
          attributes: ['crypto_id', 'symbol'],
        },
        {
          model: db.Transaction,
          attributes: ['transaction_id', 'total_price_fiat'],
        }
      ]
    });

    res.json(transfers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.createTransfer = async (req, res) => {
  const {
    from_user_id,
    to_user_id,
    crypto_id,
    amount_crypto,
    transfer_type,
    destination_address
  } = req.body;

  try {
    const senderWalletLink = await db.WalletOfUser.findOne({
      where: { user_id: from_user_id, wallet_type: 'CRYPTO' }
    });

    const senderWallet = await db.CryptoWallet.findOne({
      where: {
        wallet_id: senderWalletLink.wallet_id,
        crypto_id
      }
    });

    if (!senderWallet || parseFloat(senderWallet.balance) < amount_crypto) {
      return res.status(400).json({ error: 'Sender has insufficient balance or no wallet' });
    }

    let receiverWallet;
    if (transfer_type === 'INTERNAL') {
      const receiverWalletLink = await db.WalletOfUser.findOne({
        where: { user_id: to_user_id, wallet_type: 'CRYPTO' }
      });

      receiverWallet = await db.CryptoWallet.findOne({
        where: {
          wallet_id: receiverWalletLink.wallet_id,
          crypto_id
        }
      });

      if (!receiverWallet) {
        return res.status(400).json({ error: 'Receiver wallet not found' });
      }
    }

    senderWallet.balance -= amount_crypto;
    await senderWallet.save();

    if (transfer_type === 'INTERNAL') {
      receiverWallet.balance += amount_crypto;
      await receiverWallet.save();
    }

    const transfer = await db.Transfer.create({
      from_user_id,
      to_user_id,
      crypto_id,
      amount_crypto,
      transfer_type,
      destination_address,
      status: 'completed',
      created_at: new Date(),
      completed_at: new Date(),
      transaction_id: null
    });

    res.status(201).json(transfer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};