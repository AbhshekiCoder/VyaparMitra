import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    resetToken:{
        type: String
    },
    resetTokenExpiry:{
        type: Date
    }
})

const userModel = mongoose.model("User", userSchema);

export default userModel;