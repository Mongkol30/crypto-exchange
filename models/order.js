const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    order_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      defaultValue: uuidv4
    },
    user_id: DataTypes.STRING,
    crypto_id: DataTypes.STRING,
    fiat_id: DataTypes.STRING,
    order_type: DataTypes.STRING,
    amount_crypto: DataTypes.REAL,
    price_per_unit: DataTypes.REAL,
    status: DataTypes.STRING,
    created_at: DataTypes.DATE,
    completed_at: DataTypes.DATE,
  }, {
    tableName: 'Orders',
    timestamps: false,
  });

  Order.associate = (models) => {
    Order.belongsTo(models.User, { foreignKey: 'user_id' });
    Order.belongsTo(models.CryptoCurrency, { foreignKey: 'crypto_id' });
    Order.belongsTo(models.FiatCurrency, { foreignKey: 'fiat_id' });
    Order.hasMany(models.Transaction, { foreignKey: 'order_id' });
  };

  return Order;
};
