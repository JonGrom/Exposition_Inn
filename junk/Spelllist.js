const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Spelllist extends Model {}

Spelllist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    spellName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    spellLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    spell_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'spell',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    modelName: 'spelllist'
  },
);

module.exports = Spelllist;