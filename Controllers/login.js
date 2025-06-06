import userModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const login = async(req, res) =>{
    const { email, password} = req.body;
    try{
        const user = await userModel.findOne({email});
        if(!user) return res.status(400).send({message: "invalid credentials"});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            res.status(400).send({message: "invalid credentials"});
            return;
        }

        const token = jwt.sign({id: user._id}, process.env.SECRET_KEY, {expiresIn: '1h'});
        res.send({message: "login successfully", token:token});
       
        
    }catch(err){
        res.status(500).send({error: err.message});
        
    }
}

export default login