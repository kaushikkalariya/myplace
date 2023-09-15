const dotenv = require("dotenv").config();
const app = require("./app")

const port = process.env.PORT || 3000;

const server = app.listen(port,()=>{
    console.log(`app runing on port ${port}...`)
})