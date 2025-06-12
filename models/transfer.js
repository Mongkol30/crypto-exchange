const { v4: uuidv4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  const Transfer = sequelize.define('Transfer', {
    transfer_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: uuidv4
    },
    from_user_id: DataTypes.STRING,
    to_user_id: DataTypes.STRING,
    crypto_id: DataTypes.STRING,
    amount_crypto: DataTypes.REAL,
    transfer_type: DataTypes.STRING,
    destination_address: DataTypes.STRING,
    status: DataTypes.STRING,
    transaction_id: DataTypes.STRING,
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
