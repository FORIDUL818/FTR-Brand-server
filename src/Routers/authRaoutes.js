const express=require("express");
const { Ragistration, login } = require("../Controllers/userController");
const router=express.Router();

router.post("/ragistration",Ragistration)
router.post("/login",login)
module.exports=router;
