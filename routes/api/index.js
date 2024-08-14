const router = require('express').Router();
const user = require('./user.routes');
const login = require('./login.routes');

const character = require('./character-routes');
const weapon = require('./weapon-routes');
const armor = require('./armor-routes');
const skill = require('./skill-routes');
const spell = require('./spell-routes');
const stat = require('./stat-routes');


router.use('/login', login);
router.use('/user', user);

router.use('/character', character);
router.use('/weapon', weapon);
router.use('/armor', armor);
router.use('/skill', skill);
router.use('/spell', spell);
router.use('/stat', stat);

module.exports = router;
