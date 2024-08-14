const router = require('express').Router();
const user = require('./user.routes');
const login = require('./login.routes');

const character = require('./character-routes');

router.use('/login', login);
router.use('/user', user);
router.use('/character', character);


module.exports = router;
