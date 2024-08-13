const router = require('express').Router();
const user = require('./user.routes');
const login = require('./login.routes');

const character = require('./character-routes');
const {weapon, armor} = require('./equipment-routes');
const skill = require('./skill-routes');
const spell = require('./spell-routes');
const stat = require('./stat-routes');


router.use('/login', login);
router.use('/user', user);

router.use('/character', character);
router.use('/equipment', weapon);
router.use('/skill', skill);
router.use('/spell', spell);
router.use('/stat', stat);

module.exports = router;
