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
    acrobaticsProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    acrobaticsVal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    animalHandlingProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    animalHandlingVal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    arcanaProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    arcanaVal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    athleticsProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    athleticsVal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deceptionProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    deceptionVal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    historyProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    historyVal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    insightProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    insightVal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    intimidationProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    intimidationVal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    investigationProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    investigationVal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    medicineProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    medicineVal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    natureProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    natureVal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    perceptionProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    perceptionVal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    performanceProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    performanceVal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    persuasionProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    persuasionVal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    religionProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    religionVal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sleightOfHandProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    sleightOfHandVal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stealthProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    stealthVal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    survivalProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    survivalVal: {
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
    freezeTableName: true,
    modelName: 'skill'
  },
);

module.exports = Skill;