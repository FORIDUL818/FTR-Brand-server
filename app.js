const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const router = require("./src/Routers/authRaoutes");
const app=express()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("db connected")
})
 app.use("/api/v1",router)
app.use("*",(req,res)=>{
    res.status(404).json({message:"bad request"})
})
module.exports=app;