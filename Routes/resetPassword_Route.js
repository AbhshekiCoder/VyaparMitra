import express from "express";
import resetPassword from "../Controllers/resetPassword.js";


const resetPassword_Route = express.Router();

resetPassword_Route.post('/:token', resetPassword )

export default resetPassword_Route;