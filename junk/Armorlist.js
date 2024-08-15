const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Armorlist extends Model {}

Armorlist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    armorName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    armorType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    armorClass: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    equipped: {
      type: DataTypes.BOOLEAN,
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
    armor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'armor',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    modelName: 'armorlist'
  },
);

module.exports = Armorlist;