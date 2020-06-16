const { User } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    User.create({
      firstName: "Jack",
      lastName: "Neil",
      username: "Jneil",
      email: "jnilly@gmail.com",
      password:"123456789"
    }),
  ])
};

module.exports = seedDatabase;
