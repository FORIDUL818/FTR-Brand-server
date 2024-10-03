const mongoose= require("mongoose")
 const bcrypt=require("bcrypt") 
const userSchima=new mongoose.Schema(
    {
    firstName:{
        type:String,
        required:true,
        
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
        validate:{
            validator:(v)=>{
                let emailRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                return emailRegex.test(v)
            }, 
            message:"email is not correct"
        }
    },
    password:{
        type:String,
        required:true,
        set:(v)=>{
        return bcrypt.hashSync(v,bcrypt.genSaltSync(5))
        }
    }
},{versionKey:false,timestamps:true})

const userModel= mongoose.model("users",userSchima)
module.exports=userModel;