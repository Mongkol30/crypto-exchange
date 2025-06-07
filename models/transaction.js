'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    transaction_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    buyer_id: DataTypes.UUID,
    seller_id: DataTypes.UUID,
    order_id: DataTypes.UUID,
    crypto_id: DataTypes.UUID,
    fiat_id: DataTypes.UUID,
    amount_crypto: DataTypes.DECIMAL,
    total_price_fiat: DataTypes.DECIMAL,
    created_at: DataTypes.DATE,
    completed_at: DataTypes.DATE,
  }, {
    tableName: 'Transactions',
    timestamps: false, 
  });

  Transaction.associate = (models) => {
    Transaction.belongsTo(models.User, { foreignKey: 'buyer_id', as: 'Buyer' });
    Transaction.belongsTo(models.User, { foreignKey: 'seller_id', as: 'Seller' });
    Transaction.belongsTo(models.Order, { foreignKey: 'order_id' });
    Transaction.belongsTo(models.CryptoCurrency, { foreignKey: 'crypto_id' });
    Transaction.belongsTo(models.FiatCurrency, { foreignKey: 'fiat_id' });
    Transaction.hasOne(models.Transfer, { foreignKey: 'transaction_id' });
  };

  return Transaction;
};
