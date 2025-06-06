import express from "express";
import signup from "../Controllers/signup.js";

const signupRoute = express.Router();

signupRoute.post("/",  signup);

export default signupRoute;