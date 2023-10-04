const createError = require("http-errors");
const postService = require("../service/postService");
const asyncHandler = require("express-async-handler");

exports.getAllPost = asyncHandler(async (req, res) => {
  const Post = await postService.findAll();
  res.send(Post);
});

exports.createNewPost = asyncHandler(async (req, res, next) => {
  const {
    title,
    property_type,
    city,
    area,
    street,
    floor,
    rooms,
    total_area,
    air_direction,
    property_code,
    price,
  } = req.body;
  const Post = await postService.save({
    title,
    property_type,
    city,
    area,
    street,
    floor,
    rooms,
    total_area,
    air_direction,
    property_code,
    price,
  });
  res.send(Post);
});

exports.getPostById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await postService.findOne({ id: id });

  if (!result) {
    throw createError("404", "post does not exist");
  }
  res.send(result);
});

exports.updatePost = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const {
    title,
    property_type,
    city,
    area,
    street,
    floor,
    rooms,
    total_area,
    air_direction,
    property_code,
    price,
  } = req.body;

  const Post = postService.update(
    {
      title,
      property_type,
      city,
      area,
      street,
      floor,
      rooms,
      total_area,
      air_direction,
      property_code,
      price,
    },
    id
  );
  if (!Post) {
    throw createError("404", "post does not exist");
  }
  res.status(200).json({
    status: "success",
    data: Post,
  });
});

exports.deletePost = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const result = await postService.destroy(id);
  if (!result) {
    throw createError("404", "post does not exist");
  }
  res.status(200).json({
    status: "success",
    data: result,
  });
});
