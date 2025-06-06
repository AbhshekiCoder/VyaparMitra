import userModel from "../Models/userModel.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from 'crypto'
const forgetPassword = async(req, res) =>{
    const {email} = req.body;
    const user = await userModel.findOne({email});
     if(!user) return res.status(400).send({message: "user not found"});


     const token = crypto.randomBytes(32).toString("hex");
    await userModel.findOneAndUpdate({email}, {resetToken: token, resetTokenExpiry: Date.now() + 5 *60 *1000})
    

     const link = `http://localhost:3000/reset-password-form/resetPassword.html?token=${token}`;
     await sendEmail(email, "Reset Password", `<a href ='${link}'>Click to reset password</a>`);
     res.json({message: "reset link sent"})

     
}

export default forgetPassword;