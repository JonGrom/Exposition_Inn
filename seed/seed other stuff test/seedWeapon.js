//this is a file for loading actual weapon data, for use by other parts of the db.
const sequelize = require('../config/connection');
const { Weapon } = require('../models');

const weaponData = require('./jsons/weaponData.json');

const seedWeapon = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synced successfully.');

    const weapons = await Weapon.bulkCreate(weaponData, {
      individualHooks: true,
      returning: true,
    });

    console.log('Weapons seeded:', weapons);
  } catch (error) {
    console.error('Error seeding Weapons:', error);
  } finally {
    process.exit(0);
  }
};

seedWeapon();