//this is just a file for testing with some dummy data, mostly to make sure the db is setup correctly.
const sequelize = require('../config/connection');
const { User, Character, Skill, Stat, Spell, Armor, Weapon } = require('../models');

const userData = require('./userData.json');
const characterData = require('./characterData.json');
const skillData = require('./skillData.json');
const statData = require('./statData.json');
const spellData = require('./spellData.json');
const armorData = require('./armorData.json');
const weaponData = require('./weaponData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const character of characterData) { 
    const createdBlogpost = await Blogpost.create({
      ...blogpost,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });

    
    for (const comment of commentData) { 
      await Comment.create({
        ...comment,
        user_id: users[Math.floor(Math.random() * users.length)].id,
        blogpost_id: createdBlogpost.id,
      });
    }
  }

  process.exit(0);
};

seedDatabase();