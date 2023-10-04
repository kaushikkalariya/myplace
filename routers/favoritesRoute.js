const express = require("express");
const favoritesController = require("./../controllers/favoritesController");
const authController = require("./../controllers/authController");
const router = express.Router();

router.use(authController.protect);

router.route("/").post(favoritesController.createNewFavorites);

router
  .route("/:id")
  .get(favoritesController.getAllFavorites)
  .delete(favoritesController.deleteFavorites);

module.exports = router;
