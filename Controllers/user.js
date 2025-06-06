import userModel from "../Models/userModel.js"



const user = async(req, res) =>{
    try{
        let result = await userModel.findById(req.params.id).select("-password");
        res.status(200).send(result)
    }catch(err){
        res.status(400).send(err.message)
    }

}

export default user;