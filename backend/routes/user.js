const express = require("express");
const router = express.Router();
const z  = require("zod");
const mongoose=require("mongoose")
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const  {User}=require("../db.js")
const {Account}=require("../db.js")
const authMiddleware=require("../middlewares/middleware.js")


const SignInSchema = z.object({
    username: z.string().email(),
    password: z.string()
})
router.post("/SignIn", async function (req, res) {
    const { success } = SignInSchema.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            messgae: "Incorrect Inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);


        res.json({
            token: token
        })
        return;
    }
    res.status(411).json({
        message: "Error While Logging in"
    })


})

const SignUpSchema = z.object({
    username: z.string().email(),
    firstname: z.string(),
    lastname: z.string(),
    password: z.string()
})

router.post("/signUp", async (req, res) => {
    const { success } = SignUpSchema.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / mm Incorrect inputs"
        })

    }


    const existingUser = await User.findOne({
        username: req.body.username
    })
    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken" // Incorrect inputs"
        })
    }


    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        lastname: req.body.lastname,
        firstname: req.body.firstname
    })
    const UserID = user._id;

   await Account.create({
    UserID,
    balance:1+Math.random()*10000
})

    const token = jwt.sign({
        UserID
    }, JWT_SECRET)

    res.json({
        message: "User created successfully",
        token: token
    })

});

const updateBody = z.object({
    password: z.string().optional(),
    firstname: z.string().optional(),
    lastname: z.string().optional()
})

router.put("/", async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
       return  res.status(411).json({
            message: "Error while updating Information"
        })
    }

    await User.updateOne({ _id: req.body.userId }, req.body);
    res.json({ message: "updated successfully" })
})

router.get("/bulk", async (req, res) => {

    const filter = req.query.filter || " ";

    const users = await User.find({
        $or: [
            {

                firstname: {
                    "$regex": filter
                }
            },

            {
                lastname: {
                    "$regex": filter
                }

            }
        ]
    })
    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
    }))
  })



})


module.exports = router;
