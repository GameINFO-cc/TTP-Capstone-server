var express = require("express");
var router = express.Router();


/* GET users listing. */
router.get("/", function (req, res, next) {
  GamesEntry.findAll()
    .then((foods) => res.json(games))
    .catch((err) => console.log(err));
});

module.exports = router;