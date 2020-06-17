const express = require("express");
const router = express.Router();
const favoritesController = require("../controllers/favorites");

// GET api/favorites
router.route("/").get(favoritesController.getAllfavorites);

// favorites api/favorites
router.route("/").post(favoritesController.addFavorites);

// GET api/favorites/:id
router.route("/:id").get(favoritesController.getFavorites);

// PUT api/favorites/:id
router.route("/:id").put(favoritesController.updateFavorites)


module.exports = router;