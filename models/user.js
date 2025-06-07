'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    email: DataTypes.STRING,
    name: DataTypes.STRING,
  }, {
  tableName: 'Users',
  timestamps: false, 
});

  User.associate = (models) => {
    User.hasMany(models.WalletOfUser, { foreignKey: 'user_id' });
    User.hasMany(models.Order, { foreignKey: 'user_id' });
    User.hasMany(models.Transaction, { foreignKey: 'buyer_id' });
    User.hasMany(models.Transaction, { foreignKey: 'seller_id' });
    User.hasMany(models.Transfer, { foreignKey: 'from_user_id' });
    User.hasMany(models.Transfer, { foreignKey: 'to_user_id' });
  };

  return User;
};
