import userModel from "../Models/userModel.js";
import bcrypt from "bcrypt"

const resetPassword = async(req, res) =>{
    const {password, confirmPassword} = req.body;
    const {token} = req.params;
    console.log(token)
 try{
    const user = await userModel.findOne({$and:[{resetToken: token}, {resetTokenExpiry:{$gt: Date.now()}}]});
   if(!user) return res.status(400).send({message: "invalid or expired token"});
   if(password !== confirmPassword) return res.status(400).send({message: "password do not match"});

   let newPassword =  await bcrypt.hash(password, 10);
   console.log(password, newPassword, user)
   let result = await userModel.updateOne({email: user.email}, {$set: {password: newPassword, resetToken: "", resetTokenExpiry: ""}})
   console.log(result)
   
   res.json({message: "password reset successfully"});

}
catch(err){
    console.log(err.message)

}
}
export default resetPassword;