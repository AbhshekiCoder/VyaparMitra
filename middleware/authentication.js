
import jwt from 'jsonwebtoken'
const auth = async (req, res, next) =>{
    const token = req.headers.authorization?.split(' ')[1];
    console.log(token)
    if(!token){
        res.status(401).send({message: "Unauthorized Access"});
        return
    }
    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY );
        req.user = decoded;
        next();

    }catch(err){
        return res.status(401).send({message: err.message})
    }
}

export default auth