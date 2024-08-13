const User = require('./User');
const Character = require('./Character');
const Stat = require('./Stat');

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
  foreignKey: 'user_id',
  onDelete: "CASCADE"
})

Stat.belongsTo(Character, {
  foreignKey: 'user_id'
})




module.exports = {
  User, 
  Character,
  Stat,

}