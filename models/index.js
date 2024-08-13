const User = require('./User');
const Character = require('./Character');
const Stat = require('./Stat');
const Skill = require('./Skill');
const Spell = require('./Spell');
const Weapon = require('./Weapon');
const Armor = require('./Armor');

//only one relationship needed for user, user can have many character
User.hasMany(Character, {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
})

Character.belongsTo(User, {
  foreignKey: 'user_id'
})

//Character Stat

Character.hasOne(Stat, {
  foreignKey: 'character_id',
  onDelete: "CASCADE"
})

Stat.belongsTo(Character, {
  foreignKey: 'character_id'
})

//Character Skill

Character.hasOne(Skill, {
  foreignKey: 'character_id',
  onDelete: "CASCADE"
})

Skill.belongsTo(Character, {
  foreignKey: 'character_id'
})

//Character Spell

Character.hasMany(Spell, {
  foreignKey: 'character_id',
  onDelete: "CASCADE"
})

Spell.belongsTo(Character, {
  foreignKey: 'character_id'
})

//Character Weapon

Character.hasMany(Weapon, {
  foreignKey: 'character_id',
  onDelete: "CASCADE"
})

Weapon.belongsTo(Character, {
  foreignKey: 'character_id'
})

//Character Armor

Character.hasMany(Armor, {
  foreignKey: 'character_id',
  onDelete: "CASCADE"
})

Armor.belongsTo(Character, {
  foreignKey: 'character_id'
})

module.exports = {
  User, 
  Character,
  Stat,
  Skill,
  Spell,
  Weapon,
  Armor
}