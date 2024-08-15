const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Weaponlist extends Model {}

Weaponlist.init(
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
    equipped: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    weapon_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'weapon',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    modelName: 'weaponlist'
  },
);

module.exports = Weaponlist;