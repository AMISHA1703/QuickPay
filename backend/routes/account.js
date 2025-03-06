const express =require("express")
const authMiddleware=require("../middlewares/middleware")
const { User,Account } = require("../db")

const router=express.Router()

router.get("/balance",authMiddleware,async (req,res)=>{
    
    
    try{
    const account=await Account.findOne({
        userId: req.userId
    })

    res.status(200).json({
        balance:account.balance
    })}

    catch(err){
        res.json({message:err})

    }

})

router.post("/transfer",authMiddleware, async(req,res)=>{
   
    const {to,ampount}=req.body;
    const account= await Account.findOne({
        userId:req.userId
    });
    if(account.balance<amount){
        return  res.status(400).json({
            message:"insufficient balance"
      })
    }
    const toAccount=await Account.findOne({
        userId:to
    })
    if(!toAccount){
        return res.status(400).json({message:"inavlid account"});
    }
    await Account.updateOne({
        userId:req.userId
    },{
        $inc:{
            balance:-amount
        }
   })
    await Account.updateOne({
        userid:to
    },
    {
        $inc:{
            balance:amount
        }
   })

    res.status(200).json("Transferr Successfully")
   


})


module.exports=router