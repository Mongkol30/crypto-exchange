module.exports = (sequelize, DataTypes) => {
  const FiatCurrency = sequelize.define('FiatCurrency', {
    fiat_id: {
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
    tableName: 'FiatCurrencies',
    timestamps: false,
  });

  FiatCurrency.associate = (models) => {
    FiatCurrency.hasMany(models.FiatWallet, { foreignKey: 'fiat_id' });
    FiatCurrency.hasMany(models.Order, { foreignKey: 'fiat_id' });
    FiatCurrency.hasMany(models.Transaction, { foreignKey: 'fiat_id' });
  };

  return FiatCurrency;
};
