//this is just a file for testing with some dummy data, mostly to make sure the db is setup correctly.
const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');

const seedUser = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedUser();