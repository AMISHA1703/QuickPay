const express =require("express")
const dotenv = require("dotenv");
dotenv.config();
const mongoose=require("mongoose");
mongoose.connect(process.env.M_uri,{
    // useNewurlparser:true,
    // useunifiedTopology:true,
}).then(()=>{
    console.log("connect to mogoDB");
 })
 .catch((err)=>{
    console.log("error") })
    
 const UserSchema =new mongoose.Schema({
    username:{
      type:   "String",
      require:true
    },
    password:{
        type:"String",
        require:true
    },
    lastname:{
        type:"String"
    },
    firstname:{
        type:"String",
        require:true

    }

});
const AccountSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    balance:{
        type:Number,
        required:true
    }
},{timestamps:true})


const Account=mongoose.model("Account",AccountSchema)
const User=mongoose.model('User',UserSchema);
module.exports = {
	User,Account
};
