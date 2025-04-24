const express=require("express");
const userRoute=require("./user")
const accountRoute=require("./account.js")
const Blog=require("./blog.js")

const router=express.Router();


router.use('/user',userRoute);
router.use("/account", accountRoute);
router.use("/blogs",Blog)

module.exports=router;
  


