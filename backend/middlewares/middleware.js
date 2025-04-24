const express = require("express")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()

function authMiddleware(req, res, next) {
    console.log(typeof process.env.JWT_SECRET); // Should output 'string'
    const authHeader = req.headers.authorization;
    console.log(req.headers.authorization)
    console.log("Authorization Header:", authHeader);
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        // console.log(authHeader)

        return (res.status(403).json({
            message: "mmm"

        })
        )
    }


    const token = authHeader.split(" ")[1];
    console.log("Extracted Token:", token);
    try {

        const decode = jwt.verify(token, process.env.JWT_SECRET)
        console.log("Decoded Token:", decode);

        if (decode.userId) {
            req.userId = decode.userId
            return (
                req.userId ,
                next()
            )

        } else {
            return res.status(403).json({ message: "user does not match.." })
        }


    }
    catch (err) {
        console.error("Token Verification Error:", err);
        res.status(403).json({ error: err })

    }

};
module.exports = authMiddleware