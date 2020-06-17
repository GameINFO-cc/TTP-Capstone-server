const Sequelize = require("sequelize");
const db = require("../db");

const Favorites = db.define("favorites", {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	lastUpdated: {
		type: Sequelize.STRING,
		allowNull: false
	},
});

module.exports = Favorites;