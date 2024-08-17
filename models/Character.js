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
      //In game this is actually called Class, but obv class is a reserved js thingee, so it's archetype here
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 20
      },
    },
    background: {
      //THIS IS NOT THEIR BACKSTORY NARRATIVE! IT'S SOMETHING ELSE THAT THEY NEED.
      type: DataTypes.STRING,
      allowNull: true,
    },
    race: {
      type: DataTypes.STRING,
      allowNull: false,
    },
//BEGIN MAGIC STATS FOR CHARACTER//
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
//END OF MAGIC STATS FOR CHARACTER//
    passivePerception: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
//BEGIN OTHER PROFICIENCIES FOR CHARACTER//
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
    proficiencyBonus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
//END OTHER PROFICIENCIES FOR CHARACTER//
//BEGIN COMBAT INFORMATION FOR CHARACTER//
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
      type: DataTypes.STRING,
      allowNull: false
      },
    hitDiceCount: {
      type: DataTypes.INTEGER,
      allowNull: false
      },
    weapon: {
      type: DataTypes.STRING,
      allowNull: true
      },
    armor: {
      type: DataTypes.STRING,
      allowNull: true
      },
    kit: {
      type: DataTypes.STRING,
      allowNull: true
      },
//THESE ARE FOR WORK IN THE FUTURE! THEY WILL BE GIVEN 0 FOR NOW BY DEFAULT BECAUSE WHILE THEY CAN BE NULL, PASSING NULL INT IS A PAIN IN SEEDING//
    hpCurrent: {
      type: DataTypes.INTEGER,
      allowNull: true
      },
    hpTemp: {
      type: DataTypes.INTEGER,
      allowNull: true
      },
//END COMBAT INFORMATION FOR CHARACTER//
//BEGIN TWO MISC STRINGS
    features: {
      type: DataTypes.STRING,
      allowNull: false
      //this comes from logic related to class/archetype
      },
      
    traits: {
      type: DataTypes.STRING,
      allowNull: false
      //this comes from from logic related to race
      }, 
//END TWO MISC STRINGS
//BEGIN CHARACTER COSMETICS
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
//END CHARACTER COSMETICS
//BEGIN CHARACTER SKILLS INFO
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
//END CHARACTER SKILLS INFO
//BEGIN CHARACTER STATS INFO
    strength: {
      //strength itself
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    strMod: {
      //strength mod int
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    strSaveProf: {
      //strength save proficiency boolean component
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    strSaveVal: {
      //strength save proficiency int component
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
//END CHARACTER STATS INFO
//Foreign key - tied to USER!//
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