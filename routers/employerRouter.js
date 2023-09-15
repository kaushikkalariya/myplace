const express = require('express')
const employerController = require('./../controllers/employerController')
const router = express.Router()

router
    .route("/")
    .get(employerController.getAllEmployer)
    .post(employerController.createNewEmployer);

router
    .route("/:id")
    .get(employerController.getEmployerById)
    .patch(employerController.updateEmployer)
    .delete(employerController.deleteEmployer)
    
module.exports = router;