//this is just a file for testing with some dummy data, mostly to make sure the db is setup correctly.
const sequelize = require('../config/connection');
const { Weapon } = require('../models');

const weaponData = require('./weaponData.json');

const seedWeapon = async () => {
  await sequelize.sync({ force: true });

  const weapons = await Weapon.bulkCreate(weaponData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedWeapon();