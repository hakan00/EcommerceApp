const express = require("express");
const User = require("../models/user");
const router = express.Router();
const {v4:uuidv4} = require("uuid");
const jwt = require("jsonwebtoken");

const secretKey = "My Secret Key My Secret Key 1234. ";
const options = {
    expiresIn: "1h"
};


router.post("/register", async(req,res)=> {
    try{
        const user = new User(req.body)
        user._id = uuidv4();
        user.createdDate = new Date();
        user.isAdmin = false;

        const checkUserEmail = await User.findOne({email: user.email});

        if(checkUserEmail != null){
            res.status(403).json({message : "Bu mail adresi daha önce kullanılmıştır!"});
        }
        else{
        await user.save();
        const token = jwt.sign({},secretKey,);
        let model = {token: token, user: user};
        res.json(model);
          }


    } catch (error){
        res.status(500).json({message : error.message })

    }
})

module.exports = router ;