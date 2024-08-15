//this is a file for loading actual armor data, for use by other parts of the db.
const sequelize = require('../config/connection');
const { Armor } = require('../models');

const armorData = require('./jsons/armorData.json');

const seedArmor = async () => {
  await sequelize.sync({ force: true });

  const armor = await Armor.bulkCreate(armorData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedArmor();