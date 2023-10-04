const createError = require("http-errors");
const favoritesService = require("../service/favoritesService");
const asyncHandler = require("express-async-handler");

exports.getAllFavorites = asyncHandler(async (req, res) => {
  const Favorites = await favoritesService.findAll();
  res.send(Favorites);
});

exports.createNewFavorites = asyncHandler(async (req, res, next) => {
  const { token, postid } = req.body;
  console.log("token, postid", token, postid);
  const Favorites = await favoritesService.save({
    token: token,
    postid: postid,
  });
  res.send(Favorites);
});

exports.getFavoritesById = asyncHandler(async (req, res) => {
  const token = req.params.token;
  const result = await favoritesService.findOne({ token: token });

  if (!result) {
    throw createError("404", "Favorites does not exist");
  }
  res.send(result);
});

exports.deleteFavorites = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await favoritesService.destroy(id);
  if (!result) {
    throw createError("404", "Favorites does not exist");
  }
  res.status(200).json({
    status: "success",
    data: result,
  });
});
