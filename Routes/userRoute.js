import express from "express";
import auth from "../middleware/authentication.js";
import user from "../Controllers/user.js";


const userRoute = express.Router();

userRoute.get("/:id", auth, user);

export default userRoute;