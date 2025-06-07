'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const CryptoWallet = sequelize.define('CryptoWallet', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    wallet_id: DataTypes.UUID,
    crypto_id: DataTypes.UUID,
    balance: DataTypes.DECIMAL,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    tableName: 'CryptoWallets',
    timestamps: false, 
  });

  CryptoWallet.associate = (models) => {
    CryptoWallet.belongsTo(models.CryptoCurrency, { foreignKey: 'crypto_id' });
    CryptoWallet.belongsTo(models.WalletOfUser, { foreignKey: 'wallet_id', targetKey: 'wallet_id' });
  };

  return CryptoWallet;
};
