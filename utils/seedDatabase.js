const { User } = require("../database/models");

const seedDatabase = async () => {
	try {
		await Promise.all([
			User.create({
				name: "Yeri Lin",
				email: "ylin@gmail.com",
				password: "12345"
			}),
			User.create({
				name: "Jordan Micheal",
				email: "jordan@gmail.com",
				password: "12345"
      }),
		]);
	} catch (err) {
		console.log(err);
	}
};

module.exports = seedDatabase;