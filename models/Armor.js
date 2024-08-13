const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Armor extends Model {}

Armor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    equipped: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    armorClass: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    steathDisadvantage: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    minStrength: {
      type: DataTypes.INTEGER,
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
    modelName: 'armor'
  },
);

module.exports = Armor;