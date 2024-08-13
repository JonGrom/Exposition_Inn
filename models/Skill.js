const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Skill extends Model {}

Skill.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    acrobatics: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    animalHandling: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    arcana: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    athletics: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    deception: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    history: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    insight: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    intimidation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    investigation: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    medicine: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    nature: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    perception: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    performance: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    persuasion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    religion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    sleightOfHand: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    stealth: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    survival: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    passsivePerception: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      },
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
    modelName: 'skill'
  },
);

module.exports = Skill;