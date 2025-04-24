const express =require("express")
const authMiddleware=require("../middlewares/middleware")
const { Account } = require("../db")
const { default: mongoose } = require('mongoose');


const router=express.Router()

router.get("/balance",authMiddleware,async (req,res)=>{
    
     
    try{
    const userId=req.userId
    console.log(userId)
    console.log("userId ofrom token is ",userId)
    const account=await Account.findOne({
        userId:userId 
    })
    console.log(account)
    if(!account){
        res.json({message:"No account Find"})
    }

    res.status(200).json({
        message:"balance find ",
        balance:account.balance
    })
    }
    catch(err){
        console.error("Error fetching account balance:", err);
        res.json({message:err})

    }

})

router.post("/transfer", authMiddleware, async (req, res) => {
    const { amount, to } = req.body;
    console.log(req.userId)
try{
    const account = await Account.findOne({
        userId: new mongoose.Types.ObjectId(req.userId) 
    });

    if (account.balance < amount) {
        return res.status(400).json({
            message: "Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({
        userId: to
    });

    if (!toAccount) {
        return res.status(400).json({
            message: "Invalid account"
        })
    }

    await Account.updateOne({
        userId: req.userId
    }, {
        $inc: {
            balance: -amount
        }
    })

    await Account.updateOne({
        userId: to
    }, {
        $inc: {
            balance: amount
        }
    })

    res.json({
        message: "Transfer successful"
    })
}catch(error){
    res.json({message:EvalError})
}
});


module.exports=router