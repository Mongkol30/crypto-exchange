'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    order_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    user_id: DataTypes.UUID,
    crypto_id: DataTypes.UUID,
    fiat_id: DataTypes.UUID,
    order_type: DataTypes.STRING,
    amount_crypto: DataTypes.DECIMAL,
    price_per_unit: DataTypes.DECIMAL,
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
