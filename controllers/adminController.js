const createError = require("http-errors")
const collegeService = require("../service/adminService");
const asyncHandler = require("express-async-handler")

exports.getAllCollege = asyncHandler (async (req,res)=>{
    const college = await collegeService.findAll()
    res.send(college)
})

exports.createNewCollge = asyncHandler(async(req,res,next)=>{
    const college = await collegeService.save(req.body)
    res.send(college)
})

exports.getCollegeById = asyncHandler(async (req,res)=>{
    const id = req.params.id;
    const result = await collegeService.findOne({id:id})

    if(!result){
        throw createError('404','College does not exist')
    }
    res.send(result)
})

exports.updateCollege = asyncHandler( async (req,res)=>{
    const id = req.params.id;
    const update = req.body;

    const college = collegeService.update(update,id)
    if(!college){
        throw createError('404','College does not exist')
    }
    res.status(200).json({
        status: "success",
        data: college
      });
})

exports.deleteCollege = asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const result = await collegeService.destroy(id)
    if(!result){
        throw createError('404','College does not exist')
    }
    res.status(200).json({
        status: "success",
        data: result
    });
})

  
  
  