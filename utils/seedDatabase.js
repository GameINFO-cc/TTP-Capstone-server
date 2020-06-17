const { User, Favorites } = require("../database/models");

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
    await Favorites.create({
			title: "first game",
			lastUpdated: "yesterday",
			replies: [
				{ title: "first title", threadId: 1, userId: 1, userName: "Jordan Micheal" },
				{
					title: "second title",
					threadId: 1,
					userId: 2,
					userName: "Yeri Lin"
				}
			],
			userId: 2
		});
	} catch (err) {
		console.log(err);
	}
};

module.exports = seedDatabase;