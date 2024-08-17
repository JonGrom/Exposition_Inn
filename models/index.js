const User = require('./User');
const Character = require('./Character');
const Spell = require('./Spell');
const Weapon = require('./Weapon');
const Armor = require('./Armor');
// const CharacterWeapons = require('./CharacterWeapons')
// const CharacterArmor = require('./CharacterArmor')
// const CharacterSpells = require('./CharacterSpells')


//only one relationship needed for user, user can have many character
User.hasMany(Character, {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
})

Character.belongsTo(User, {
  foreignKey: 'user_id'
})

//THESE JOIN TABLES ARE BEING SET ASIDE FOR A MORE ADVANCED INVENTORY ASSIGNMENT SYSTEM IN THE FUTURE//

//Character Spell

// Character.belongsToMany(Spell, {through: 'CharacterSpells'});
// Spell.belongsToMany(Character, {through: 'CharacterSpells'});

//Character Weapon

// Character.belongsToMany(Weapon, {through: 'CharacterWeapons'});
// Weapon.belongsToMany(Character, {through: 'CharacterWeapons'});

//Character Armor

// Character.belongsToMany(Armor, {through: 'CharacterArmor'});
// Armor.belongsToMany(Character, {through: 'CharacterArmor'});

module.exports = {
  User, 
  Character,
  Spell,
  Weapon,
  Armor,
}