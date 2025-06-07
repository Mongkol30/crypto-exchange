'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Transfer = sequelize.define('Transfer', {
    transfer_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    from_user_id: DataTypes.UUID,
    to_user_id: DataTypes.UUID,
    crypto_id: DataTypes.UUID,
    amount_crypto: DataTypes.DECIMAL,
    transfer_type: DataTypes.STRING, // เช่น 'internal' หรือ 'external'
    destination_address: DataTypes.STRING,
    status: DataTypes.STRING, // เช่น 'pending', 'completed'
    transaction_id: DataTypes.UUID,
    created_at: DataTypes.DATE,
    completed_at: DataTypes.DATE,
  }, {
    tableName: 'Transfers',
    timestamps: false, 
  });

  Transfer.associate = (models) => {
    Transfer.belongsTo(models.User, { foreignKey: 'from_user_id', as: 'FromUser' });
    Transfer.belongsTo(models.User, { foreignKey: 'to_user_id', as: 'ToUser' });
    Transfer.belongsTo(models.CryptoCurrency, { foreignKey: 'crypto_id' });
    Transfer.belongsTo(models.Transaction, { foreignKey: 'transaction_id' });
  };

  return Transfer;
};
