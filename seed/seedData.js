//this is just a file for testing with some dummy data, mostly to make sure the db is setup correctly.
const sequelize = require('../config/connection');
const { Weapon, Armor, Spell, User, Character,
        // CharacterWeapons, 
        // CharacterSpells, 
        // CharacterArmor 
      } = require('../models');
//static value
const weaponData = require('./jsons/weaponData.json');
const armorData = require('./jsons/armorData.json');
const spellData = require('./jsons/spellData.json');
//test table
const userTestData = require('./jsons/userTestData.json');
const characterTestData = require('./jsons/characterTestData.json');

//test join table
// const charWeaponTestData = require('./jsons/charWeaponTestData.json');
// const charArmorTestData = require('./jsons/charArmorTestData.json');
// const charSpellTestData = require('./jsons/charSpellTestData.json');


const seedDB = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synced successfully.');
    //codetable stuff:
    const weapons = await Weapon.bulkCreate(weaponData, {
      individualHooks: true,
      returning: true,
    });
    const armor = await Armor.bulkCreate(armorData, {
      individualHooks: true,
      returning: true,
    });
    const spells = await Spell.bulkCreate(spellData, {
      individualHooks: true,
      returning: true,
    });
    
    //testdata stuff:
    const testUsers = await User.bulkCreate(userTestData, {
      individualHooks: true,
      returning: true,
    });
    
    for (let i = 0; i < characterTestData.length; i++) { 
      const testCharacters = await Character.create({
        ...characterTestData[i],
        user_id: testUsers[i].id, // Assign corresponding user_id
      });
      console.log('Test Characters seeded:', testCharacters);
    }
        //jointable testdata stuff:
        
        // for (const characterWeapons of charWeaponTestData) { 
        //   await CharacterWeapons.create({
        //     ...characterWeapons,
        //     character_id: testCharacters[Math.floor(Math.random() * testCharacters.length)].id,
        //     weapon_id: weapons[Math.floor(Math.random() * weapons.length)].id,
        //   });
        // }

        // for (const characterArmor of charArmorTestData) { 
        //   await CharacterArmor.create({
        //     ...characterArmor,
        //     character_id: testCharacters[Math.floor(Math.random() * testCharacters.length)].id,
        //     armor_id: armor[Math.floor(Math.random() * armor.length)].id,
        //   });
        // }

        // for (const characterSpells of charSpellTestData) { 
        //   await CharacterSpells.create({
        //     ...characterSpells,
        //     character_id: testCharacters[Math.floor(Math.random() * testCharacters.length)].id,
        //     spell_id: spells[Math.floor(Math.random() * spells.length)].id,
        //   });
        // }

  } catch (error) {
    console.error('Error seeding users:', error);
  } finally {
    process.exit(0);
  }
};

seedDB();