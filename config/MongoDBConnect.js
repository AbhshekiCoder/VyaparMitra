import mongoose from "mongoose"


const MongoDBConnect = () =>{
    mongoose.connect(process.env.MONGODB_URL ).then(()=>{
        console.log("connected to database");
    }).catch(err =>{
        console.log(err.message)
    })
}

export default MongoDBConnect;