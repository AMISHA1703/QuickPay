const dotenv=require("dotenv");
dotenv.config();
const port=process.env.PORT;

const express=require("express");
const app=express();
const cors=require("cors");

const RootRouter =require("./routes/mainRoute");
const bodyParser = require("body-parser");

// app.use(bodyParser())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1",RootRouter)

app.listen(port,()=>{
    console.log(`app listening on ${port}`);
})