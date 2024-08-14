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
      allowNull: false,
    },
    equipped: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    character_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'character',
        key: 'id'
      }
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