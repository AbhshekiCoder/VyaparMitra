import userModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'

const signup = async(req, res) =>{
    const {firstName, lastName, email, password} = req.body;
    try{
        const existingUser = await userModel.findOne({email});
        if(existingUser) return res.status(400).json({message: "user already exist"});

        const hashPassword = await bcrypt.hash(password, 10);
        const user = new userModel({firstName, lastName, email, password: hashPassword});
        await user.save();
        res.status(201).json({message: "registered successfully"})
    }catch(err){
        res.status(500).send({error: err.message});
        
    }
}

export default signup