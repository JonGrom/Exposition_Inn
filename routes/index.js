const router = require('express').Router();
const path = require("path")
const apiRoutes = require('./api');
const { User, Character } = require('../models');
const withAuth = require('../utils/auth');
const { getAttributes } = require('../models/Character');
const { convertFromDatabase } = require('../utils/converter')

router.use('/api', apiRoutes);

router.get('/', async (req, res) => {
    try {
    console.log("Hello")
    res.render('homepage', { 
      logged_in: req.session.logged_in,
      bodyClass: req.session.logged_in ? 'home-background-alt' : 'home-background'
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



// Use withAuth middleware to prevent access to route
router.get('/user', withAuth, async (req, res) => {
  console.log("user page")
  try {
    // Find the logged in user based on the session ID
    // const userData = await User.findByPk(req.session.user_id);

    const characterData = await Character.findAll({
      where: {user_id: req.session.user_id}
    })

    const characters = characterData.map((character) => character.get({plain: true}));

    // const user = userData.get({ plain: true });

    res.render('user', {
      bodyClass: 'user-background',
      // ...user,
      characters,
      character_list: true,
      logged_in: true
    });
  } catch (err) {
    console.log("User page loading fails: routes/index")
    res.status(500).json(err);
  }
});

router.get('/profile', (req, res) => {
  res.render('profile', {
    bodyClass: 'profile-background',
    logged_in: true,
    making_character: true
    });
});



router.get('/character/:id', withAuth, async (req, res) => {
  console.log("character page")
  try {
    // Find the logged in user based on the session ID
    // const userData = await User.findByPk(req.session.user_id);

    const characterData = await Character.findByPk(req.params.id)

    // add converter to pull out weapons, spells, 


    const character = await convertFromDatabase(characterData.get({plain: true}));
    console.log(character)

    // const user = userData.get({ plain: true });

    res.render('character', {
      bodyClass: 'profile-background',
      ...character,
      logged_in: true,
      view_character: true
    });
  } catch (err) {
    console.log("character page loading fails: routes/index")
    res.status(500).json(err);
  }
});

router.get('/profile', (req, res) => {
  res.render('profile', {
    bodyClass: 'profile-background'
    });
});



module.exports = router;