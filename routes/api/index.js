const router = require('express').Router();
const user = require('./user.routes');
const login = require('./login.routes');
const profile = require('./profile-routes');

const character = require('./character-routes');

router.use('/login', login);
router.use('/user', user);
router.use('/character', character);
router.use('/profile', profile);


module.exports = router;
