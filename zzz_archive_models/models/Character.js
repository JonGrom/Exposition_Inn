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
    //THIS IS NOT THEIR BACKSTORY NARRATIVE! IT'S SOMETHING ELSE THAT THEY NEED.
    },
    race: {
      type: DataTypes.STRING,
      allowNull: false,
    },
//Begin magic stuff for character
    spellsKnown: {
      type: DataTypes.STRING,
      allowNull: true
    },
    splClass: {
      type: DataTypes.STRING,
      allowNull: true
    },
    splAbility: {
      type: DataTypes.STRING,
      allowNull: true
    },
    splSave: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    splAtckBonus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lvl1spellSlots: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
//end magic stuff
    passivePerception: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
//other proficiencies
    languages: {
      type: DataTypes.STRING,
      allowNull: false
    },
    weaponProficiencies: {
      type: DataTypes.STRING,
      allowNull: true
    },
    armorProficiencies: {
      type: DataTypes.STRING,
      allowNull: true
    },
    toolProficiencies: {
      type: DataTypes.STRING,
      allowNull: true
    },
//Begin combat stuff for character
    armorClass: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    initiative: {
      type: DataTypes.INTEGER,
      allowNull: false
      },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false
      },
    hpMax: {
      type: DataTypes.INTEGER,
      allowNull: false
      },
    hitDice: {
      type: DataTypes.INTEGER,
      allowNull: false
      },
    hitDiceCount: {
      type: DataTypes.INTEGER,
      allowNull: false
      },
    equipment: {
      type: DataTypes.STRING,
      allowNull: true
      },
//THESE ARE FOR THE FUTURE!
    hpCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true
      },
    hpTemp: {
      type: DataTypes.INTEGER,
      allowNull: true
      },
//End combat stuff for character//

//DO WE NEED THESE TWO STRINGS IN DB? OR WERE THESE DERIVED?
    features: {
      type: DataTypes.STRING,
      allowNull: false
      },
      //this comes from class/archetype
    traits: {
      type: DataTypes.STRING,
      allowNull: false
      },
      //this comes from race
//COSMETICS
    personalityTraits: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ideals: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bonds: {
      type: DataTypes.STRING,
      allowNull: true
    },
    flaws: {
      type: DataTypes.STRING,
      allowNull: true
    },
    alignment: {
      type: DataTypes.STRING,
      allowNull: true
    },
//Foreign keys
    // equipped_weapon_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: 'weapon',
    //     key: 'id',
    //   },
    // },
    // equipped_armor_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: 'armor',
    //     key: 'id',
    //   },
    // },
    // spellsKnown: {
    //   type: DataTypes.ARRAY(DataTypes.INTEGER),
    //   allowNull: true,
    //   references: {
    //     model: 'spell',
    //     key: 'id',
    //   },
    // },
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