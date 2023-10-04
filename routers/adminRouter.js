const express = require("express");
const adminController = require("./../controllers/adminController");
const authController = require("./../controllers/authController");
const router = express.Router();

router.route("/login").post(authController.login);
router.use(authController.protect);

router.patch("/updateMyPassword", authController.updatePassword);

// router
//   .route("/")
//   .get(adminController.getAllCollege)
//   .post(adminController.createNewCollge);

// router
//   .route("/:id")
//   .get(adminController.getCollegeById)
//   .patch(adminController.updateCollege)
//   .delete(adminController.deleteCollege);

module.exports = router;
