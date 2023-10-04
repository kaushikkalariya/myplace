const express = require("express");
const postController = require("./../controllers/postController");
const authController = require("./../controllers/authController");
const router = express.Router();

router.use(authController.protect);
router
  .route("/")
  .get(postController.getAllPost)
  .post(postController.createNewPost);

router
  .route("/:id")
  .get(postController.getPostById)
  .patch(postController.updatePost)
  .delete(postController.deletePost);

module.exports = router;
