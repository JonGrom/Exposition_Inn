//this is just a file for testing with some dummy data, mostly to make sure the db is setup correctly.
const sequelize = require('../config/connection');
const { Armor } = require('../models');

const armorData = require('./armorData.json');

const seedArmor = async () => {
  await sequelize.sync({ force: true });

  const armor = await Armor.bulkCreate(armorData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedArmor();