const db = require('../models');

exports.performInternalTransfer = async ({
  from_user_id,
  to_user_id,
  crypto_id,
  amount_crypto,
  transaction_id
}) => {

  const senderWalletLink = await db.WalletOfUser.findOne({
    where: { user_id: from_user_id, wallet_type: 'CRYPTO' }
  });
console.log(senderWalletLink)

  const senderWallet = await db.CryptoWallet.findOne({
    where: { wallet_id: senderWalletLink.wallet_id, crypto_id }
  });
  console.log(senderWallet)
  const receiverWalletLink = await db.WalletOfUser.findOne({
    where: { user_id: to_user_id, wallet_type: 'CRYPTO' }
  });
  console.log(receiverWalletLink)
  const receiverWallet = await db.CryptoWallet.findOne({
    where: { wallet_id: receiverWalletLink.wallet_id, crypto_id }
  });
  console.log(receiverWallet)
  if (!senderWallet || !receiverWallet) {
    throw new Error('Wallet not found for sender or receiver');
  }

  if (senderWallet.balance < amount_crypto) {
    throw new Error('Sender has insufficient balance');
  }

  senderWallet.balance = parseFloat(senderWallet.balance) - parseFloat(amount_crypto);
  receiverWallet.balance = parseFloat(receiverWallet.balance) + parseFloat(amount_crypto);
  await senderWallet.save();
  await receiverWallet.save();

  const transfer = await db.Transfer.create({
    from_user_id,
    to_user_id,
    crypto_id,
    amount_crypto,
    transfer_type: 'INTERNAL',
    destination_address: null,
    status: 'COMPLETED',
    transaction_id,
    created_at: new Date(),
    completed_at: new Date()
  });

  return transfer;
};
