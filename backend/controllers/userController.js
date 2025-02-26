import userModel from '../models/userModel.js';
import validator from "validator";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


//
const loginUser =async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if(!user)
        {
            return res.json({success:false,message:"User not Found"});
        }
        const isMatch = await bcrypt.compare(password,user.password);

        if (!isMatch) {
            return res.json({success:false,message:"Invalid Credential "});
        }

        const token = createToken(user._id);
        res.json({success:true,token:token});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
        
    }
}
const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET);
}

const registerUser = async (req, res) => {
    const {name,email,password}=req.body;
    try {
    const exists = await userModel.findOne({email});
    //checking a user exist
    if (exists) {
        return res.json({success:false,message:"User Already exists"});
    }
    //validating a email and Strong password
    if (!validator.isEmail(email)) {
        return res.json({success:false,message:"Please Enter a Valid Email"})
    };
    if (password.length<8) {
        return res.json({success:false,message:"Please Enter a Strong Password "})
    }
    //hashed a password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const userData = new userModel({
        name:name,
        email:email,
        password:hashedPassword,
    })

   const user = await userData.save();
    const token = createToken(user._id);
    res.json({success:true,token:token})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
        
    }
}

export {loginUser, registerUser};