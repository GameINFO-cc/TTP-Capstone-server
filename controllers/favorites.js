const { User, Favorites } = require("../database/models");

const favoritesController = {
  getAllfavorites: getAllfavorites,
  addFavorites: addFavorites,
	getFavorites: getFavorites,
	updateFavorites: updateFavorites
};

// GET api/favorites
async function getAllfavorites(req, res, next) {
	try {
		const favorites = await Favorites.findAll({ include: [User] });
		res.status(200).json(favorites);
		console.log("attempting to find favorites");
	} catch (err) {
		console.log(err);
	}
}

// Favorites api/favorites
async function addFavorites(req, res, next) {
	try {
		const newFavorites = await Favorites.create(req.body);
		console.log("looking for Favorites");
		res.status(201).json(newFavorites);
	} catch (err) {
		console.log(err);
	}
}

// GET api/Favorites
async function getFavorites(req, res, next) {
	try {
		let favorite = await Favorites.findById(req.params.id, { include: [User] });
		if (favorite) {
			res.json(favorite);
		} else {
			res.status(404).send("Favorites not found");
		}
	} catch (err) {
		console.log(err);
	}
}

async function updateFavorites(req, res, next) {
	try {
		console.log("tried to update favorites");
		console.log(req.body);
		let updatedFavoritesInfo = await Favorites.update(req.body, {
			where: { id: req.params.id },
			returning: true,
			plain: true
		});
		res.status(200).json(updatedFavoritesInfo[1]);
	} catch (err) {
		next(err);
	}
}

module.exports = favoritesController;