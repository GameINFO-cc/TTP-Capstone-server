const Sequelize = require("sequelize");
const db = require("../db");
const crypto = require("crypto");
const sequelize = require("sequelize");


const Users = db.define("users", {
  email: { 
    type: Sequelize.STRING, 
    allowNull: false, 
    validate: {isEmail: true}, 
    unique:true 
  },    
  password: {
    type: Sequelize.STRING, 
    allowNull: false,
    get() {
      return () => this.getDataValue("password");
    }},   

  salt: { type: sequelize.STRING, get(){
    return () => this.getDataValue("salt")
  }},

  googleId: { 
    type: Sequelize.STRING
  }
});

Users.generateSalt = function() {
  return crypto.randomBytes(16).toString("base64");
};

Users.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash("RSA-SHA256")
    .update(plainText)
    .update(salt)
    .digest("hex");
};

Users.prototype.correctPassword = function(candidatePwd) {
  return Users.encryptPassword(candidatePwd, this.salt()) === this.password();
};

const setSaltAndPassword = user => {
  if (user.changed("password")) {
    user.salt = Users.generateSalt();    
    user.password = Users.encryptPassword(user.password(), user.salt());
  }
};

Users.beforeCreate(setSaltAndPassword);
Users.beforeUpdate(setSaltAndPassword);


module.exports = Users;