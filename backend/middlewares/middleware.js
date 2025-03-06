const express=require("express")
const jwt  =require("jsonwebtoken")
const JWT_SECRET= require("../config") ;

 function authMiddleware(req ,res,next){
    const authHeader=req.headers.authorization;
    if(!authHeader|| !authHeader.startWith("Bearer")){
        res.status(403).json({})
    }
    

    const token = authHeader.split("")[1];
    try{

        const decode=jwt.verify(token,JWT_SECRET)
        req.userId=decoded.userId;
        next()

    }
    catch(err){
        res.status(403).json({error:err})

    }

};
module.exports=authMiddleware