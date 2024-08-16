//this is just a file for testing with some dummy data, mostly to make sure the db is setup correctly.
const sequelize = require('../config/connection');
const { Weapon, Armor, Spell, User, Character, Skill, Stat, 
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
const skillTestData = require('./jsons/skillTestData.json');
const statTestData = require('./jsons/statTestData.json');
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
    
      for (const character of characterTestData) { 
        const testCharacters = await Character.create({
          ...character,
          user_id: testUsers[Math.floor(Math.random() * testUsers.length)].id,
          equipped_weapon_id: weapons[Math.floor(Math.random() * weapons.length)].id,
          equipped_armor_id: armor[Math.floor(Math.random() * armor.length)].id,
          // spellsKnown: spells[Math.floor(Math.random() * spells.length)].id,
        });
        console.log('Test Characters seeded:', testCharacters);
        // for (const skill of skillTestData) { 
        //   await Skill.create({
        //     ...skill,
        //     character_id: testCharacters[Math.floor(Math.random() * testCharacters.length)].id,
        //   });
        // }

        // for (const stat of statTestData) { 
        //   await Stat.create({
        //     ...stat,
        //     character_id: testCharacters[Math.floor(Math.random() * testCharacters.length)].id,
        //   });
        // }
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