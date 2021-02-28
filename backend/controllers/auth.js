const User = require('../models/User.model');
const bcryptjs = require('bcryptjs');
const ErrorResponse = require('../utils/errorResponse');

exports.register = async(req,res,next)=>{
    const {username, email, password} = req.body;

    User.create({username, email, password})
    .then(user=>sendToken(user, 201, res))
    .catch(err=>next(new ErrorResponse(err.message, 500)))
}

exports.login = async(req,res,next)=>{

    const user = await User.findOne({email: req.body.email}).select("password").select("email")
        
    if(!user){
        return next(new ErrorResponse("Invalid credentials!", 401))
        }

    try {
        if(await bcryptjs.compare(req.body.password, user.password)){
            return sendToken(user, 200,res)
        }else{
            return next(new ErrorResponse("Invalid credentials!", 401))
            }
    } catch (error) {
        return next(new ErrorResponse(error.message, 500))
    }
    
    
}

exports.forgotpassword = (req,res,next)=>{
    res.send("Forgot Password Router")
}

exports.resetpassword = (req,res,next)=>{
    res.send("Reset Password Router")
} 

const sendToken = (user, statusCode, res)=>{
    const token =  user.getSignedToken();
    res.status(statusCode).json({
        success: true,
        token
    })
}
