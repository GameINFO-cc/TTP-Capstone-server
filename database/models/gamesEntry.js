const Sequelize = require("sequelize");
const db = require("../db");

const GamesEntry = db.define("user", {
  name: { 
    type: Sequelize.STRING, 
    allowNull: false 
  }
});

module.exports = GamesEntry;
