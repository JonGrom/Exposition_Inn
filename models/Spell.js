const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Spell extends Model {}

Spell.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    spellClasses: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    spellName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    spellLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    modelName: 'spell'
  },
);

module.exports = Spell;