'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './dev-database.sqlite',
  logging: false
});

const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => file.endsWith('.js') && file !== 'index.js')
  .forEach(file => {
    const modelDef = require(path.join(__dirname, file));
    if (typeof modelDef === 'function') {
      const model = modelDef(sequelize, DataTypes);
      db[model.name] = model;
    } else {
      console.warn(`${file} is not a valid Sequelize model.`);
    }
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
