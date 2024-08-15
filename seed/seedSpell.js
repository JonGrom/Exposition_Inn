//this is just a file for testing with some dummy data, mostly to make sure the db is setup correctly.
const sequelize = require('../config/connection');
const { Spell } = require('../models');

const spellData = require('./spellData.json');

const seedSpell = async () => {
  await sequelize.sync({ force: true });

  const spells = await Spell.bulkCreate(spellData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedSpell();