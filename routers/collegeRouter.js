const express = require('express')
const collegeController = require('./../controllers/collegeController')
const router = express.Router()

router
    .route("/")
    .get(collegeController.getAllCollege)
    .post(collegeController.createNewCollge);

router
    .route("/:id")
    .get(collegeController.getCollegeById)
    .patch(collegeController.updateCollege)
    .delete(collegeController.deleteCollege)
    
module.exports = router;