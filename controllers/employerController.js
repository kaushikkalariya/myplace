const createError = require("http-errors")
const employerService = require("../service/employerService");
const asyncHandler = require("express-async-handler")

exports.getAllEmployer = asyncHandler (async (req,res)=>{
    const Employer = await employerService.findAll()
    res.send(Employer)
})

exports.createNewEmployer = asyncHandler(async(req,res,next)=>{
    const Employer = await employerService.save(req.body)
    res.send(Employer)
})

exports.getEmployerById = asyncHandler(async (req,res)=>{
    const id = req.params.id;
    const result = await employerService.findOne({id:id})

    if(!result){
        throw createError('404','Employer does not exist')
    }
    res.send(result)
})

exports.updateEmployer = asyncHandler( async (req,res)=>{
    const id = req.params.id;
    const update = req.body;

    const Employer = employerService.update(update,id)
    if(!Employer){
        throw createError('404','Employer does not exist')
    }
    res.status(200).json({
        status: "success",
        data: Employer
      });
})

exports.deleteEmployer = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const result = await employerService.destroy(id)
    if(!result){
        throw createError('404','Employer does not exist')
    }
    res.status(200).json({
        status: "success",
        data: result
    });
})

  
  
  