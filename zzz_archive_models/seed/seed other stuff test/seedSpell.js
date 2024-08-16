//this is a file for loading actual spell data, for use by other parts of the db.
const sequelize = require('../config/connection');
const { Spell } = require('../models');

const spellData = require('./jsons/spellData.json');

const seedSpell = async () => {
  await sequelize.sync({ force: true });

  const spells = await Spell.bulkCreate(spellData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedSpell();