module.exports = (sequelize, DataTypes) => {
  const FiatWallet = sequelize.define('FiatWallet', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    wallet_id: DataTypes.STRING,
    fiat_id: DataTypes.STRING,
    balance: DataTypes.REAL,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    tableName: 'FiatWallets',
    timestamps: false,
  });

  FiatWallet.associate = (models) => {
    FiatWallet.belongsTo(models.FiatCurrency, { foreignKey: 'fiat_id' });
    FiatWallet.belongsTo(models.WalletOfUser, { foreignKey: 'wallet_id', targetKey: 'wallet_id' });
  };

  return FiatWallet;
};
