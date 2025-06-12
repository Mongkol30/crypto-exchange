const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    transaction_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: uuidv4
    },
    buyer_id: DataTypes.STRING,
    seller_id: DataTypes.STRING,
    order_id: DataTypes.STRING,
    crypto_id: DataTypes.STRING,
    fiat_id: DataTypes.STRING,
    amount_crypto: DataTypes.REAL,
    total_price_fiat: DataTypes.REAL,
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
