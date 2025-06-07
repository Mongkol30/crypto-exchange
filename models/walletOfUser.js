'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const WalletOfUser = sequelize.define('WalletOfUser', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: DataTypes.UUID,
    wallet_id: DataTypes.UUID,
    wallet_type: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    tableName: 'WalletOfUsers',
    timestamps: false, 
  });

  WalletOfUser.associate = (models) => {
    WalletOfUser.belongsTo(models.User, { foreignKey: 'user_id' });
    WalletOfUser.hasMany(models.FiatWallet, { foreignKey: 'wallet_id', sourceKey: 'wallet_id' });
  WalletOfUser.hasMany(models.CryptoWallet, { foreignKey: 'wallet_id', sourceKey: 'wallet_id' });
  };

  return WalletOfUser;
};
