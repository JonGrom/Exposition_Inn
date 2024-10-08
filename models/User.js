const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class User extends Model { checkPassword(loginPw) {
  return bcrypt.compareSync(loginPw, this.password);
}}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      len: [5, 15]
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [5, 15]
    }
  },
  {
    hooks: {
      beforeCreate: async function(userdata){
        userdata.password = await bcrypt.hash(userdata.password, 10)
        return userdata
      },
      beforeUpdate: async function(userdata){
        userdata.password = await bcrypt.hash(userdata.password, 10)
        return userdata
      }
    },
    sequelize,
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    modelName: 'user'
  }
);

module.exports = User;