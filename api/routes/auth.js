const router = require("express").Router();
const User = require("../models/User");
const bcrypt=require("bcrypt");

//Register
router.post("/register",async(req,res) =>{
    try{
        const newUser = new User({
                username:req.body.username,
                email:req.body.email,
                password:req.body.password
            });
            
        const user = await newUser.save();
        res.status(500).json(err)
    }
    catch(err){
        res.status(500).json(err);
    }

});

//Login

module.exports=router