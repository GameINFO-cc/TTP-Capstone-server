// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const User = require("./users");
const Favorites = require("./favorites")

User.hasMany(Favorites);
Favorites.belongsTo(User);

module.exports = {
  User,
  Favorites
};
