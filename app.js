const express = require('express')
const app = express();
const collegeRouter = require('./routers/collegeRouter')
const employerRouter = require('./routers/employerRouter')
const createError = require('http-errors')

app.use(express.json());
app.use(express.urlencoded({extended:true}))

//Router

app.get("/api/v1",(req,res,next)=>{
    console.log("aaa")    
})

app.use("/api/v1/college",collegeRouter)
app.use("/api/v1/employer",employerRouter)



app.use((req,res,next)=>{
    next(createError(404,'Not Found'))
})

app.use((err,req,res,next)=>{
    res.status(err.status || 5000)

    res.send({
        error:{
            status:err.status,
            message:err.message
        }
    })
})


module.exports = app;