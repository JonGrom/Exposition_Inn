const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Stat extends Model {}

Stat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    //strength itself
    strength: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //strength mod int
    strMod: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //strength save proficiency boolean component
    strSaveProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    //strength save proficiency int component
    strSaveVal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dexterity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dexMod: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dexSaveProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    dexSaveVal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    constitution: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    conMod: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    conSaveProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    conSaveVal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    intelligence: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    intMod: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    intSaveProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    intSaveVal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    wisdom: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    wisMod: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    wisSaveProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    wisSaveVal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    charisma: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    chaMod: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    chaSaveProf: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    chaSaveVal: {
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
    modelName: 'stat'
  },
);

module.exports = Stat;