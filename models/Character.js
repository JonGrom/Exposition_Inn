const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
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
    archetype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //In game this is actually called Class, but obv class is a reserved js thingee, so it's archetype here
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 20
      },
    },
    background: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //THIS IS NOT THEIR BACKSTORY NARRATIVE! IT'S SOMETHING ELSE THAT THEY NEED.
    race: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alignment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lvl1slot: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    stat_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'stat',
        key: 'id'
      }
    },
    skill_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'skill',
        key: 'id'
      }
    },
    weapon_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'weapon',
        key: 'id'
      }
    },
    armor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'armor',
        key: 'id'
      }
    },
    spell_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'equipment',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    modelName: 'character'
  },
);

module.exports = Character;