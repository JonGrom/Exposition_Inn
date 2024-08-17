const router = require("express").Router() 
const { Character, Stat, Skill, Weapon, Armor, Spell, User } = require("../../models")


router.get('/', (req, res) => {
  res.render('profile', {
  bodyClass: 'profile-background',
  logged_in: true,
  making_character: true
  });
});

module.exports = router