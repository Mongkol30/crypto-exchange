module.exports = (sequelize, DataTypes) => {
  const CryptoCurrency = sequelize.define('CryptoCurrency', {
    crypto_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    tableName: 'CryptoCurrencies',
    timestamps: false,
  });

  CryptoCurrency.associate = (models) => {
    CryptoCurrency.hasMany(models.CryptoWallet, { foreignKey: 'crypto_id' });
    CryptoCurrency.hasMany(models.Order, { foreignKey: 'crypto_id' });
    CryptoCurrency.hasMany(models.Transaction, { foreignKey: 'crypto_id' });
    CryptoCurrency.hasMany(models.Transfer, { foreignKey: 'crypto_id' });
  };

  return CryptoCurrency;
};
