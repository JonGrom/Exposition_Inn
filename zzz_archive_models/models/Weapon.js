const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Weapon extends Model {}

Weapon.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    weaponName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weaponType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weaponDamage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    properties: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    modelName: 'weapon'
  },
);

module.exports = Weapon;