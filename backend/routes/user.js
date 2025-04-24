const express = require("express");
const router = express.Router();
const z = require("zod");
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

// const { JWT_SECRET } = require("../config");
const { User } = require("../db.js")
const { Account } = require("../db.js")
const authMiddleware = require("../middlewares/middleware.js")


const SignInSchema = z.object({
    username: z.string().email(),
    password: z.string()
})
router.post("/SignIn", async function (req, res) {
    try {
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
        console.log(user)
        if (user) {
            const token = jwt.sign({
                userId: user._id
            }, process.env.JWT_SECRET);

            console.log("token in signIn is ", token)

            return (
                res.json({
                    token: token
                }))
        }
    } catch (error) {
    res.status(411).json({
        message: "Error While Logging in",
        error: error
    })
}


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
    const userId= user._id;

    await Account.create({
        userId: user._id,
        balance: 1 + Math.random() * 10000
    })


    const token = jwt.sign({
        userId
    }, process.env.JWT_SECRET, { expiresIn: "15d" })

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
        return res.status(411).json({
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
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    })

})


module.exports = router;
