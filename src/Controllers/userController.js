const userModel = require("../Model/UserModels");
const bcrypt=require("bcrypt")
// Ragistration start
const Ragistration=async (req,res)=>{
    try {
        let {firstName,lastName,email,password}=req.body;
        const userData=await userModel.create({firstName,lastName,email,password})
        res.status(200).json({status:"success",data:userData})
    } catch (error) {
        res.status(401).json({status:"fail",data:error})
    }
} 
// Ragistration end

 // login start
  const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const userData=await userModel.findOne({email})
        if(!userData){
            return res.status(401).json({status:"user not found"})
        }
        let isloginPassword=await bcrypt.compare(password,userData.password)
        if(!isloginPassword){
         return res.status(401).json({status:"password is not found"})
        }
        else{
            res.status(200).json({status:"success",data:userData})
        }
    } catch (error) {
        res.status(401).json({status:"fail",data:error})
    }
  }
 // login end
module.exports={
    Ragistration,
    login
}